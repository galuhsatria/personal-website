import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import querystring from 'querystring';

const { SPOTIFY_CLIENT_ID: client_id, SPOTIFY_CLIENT_SECRET: client_secret, SPOTIFY_REFRESH_TOKEN: refresh_token } = process.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

const getAccessToken = async (): Promise<string> => {
  const res = await axios.post<{ access_token: string }>(
    TOKEN_ENDPOINT,
    querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return res.data.access_token;
};

const getNowPlaying = async (): Promise<SpotifyData | null> => {
  const access_token = await getAccessToken();

  try {
    const response = await axios.get<SpotifyData>(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204 || response.status > 400 || response.data.currently_playing_type !== 'track') {
      return null;
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    return null;
  }
};

export async function GET(req: NextRequest) {
  const data = await getNowPlaying();

  if (!data) {
    return NextResponse.json(
      { isPlaying: false },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=90',
        },
      }
    );
  }

  const responseData = {
    isPlaying: data.is_playing,
    title: data.item.name,
    album: data.item.album.name,
    artist: data.item.album.artists.map((artist) => artist.name).join(', '),
    albumImageUrl: data.item.album.images[0].url,
    songUrl: data.item.external_urls.spotify,
  };

  return NextResponse.json(responseData, {
    headers: {
      'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=90',
    },
  });
}
