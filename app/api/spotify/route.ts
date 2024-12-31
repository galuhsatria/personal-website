import { NextRequest, NextResponse } from 'next/server';
import querystring from 'querystring';

const { SPOTIFY_CLIENT_ID: client_id, SPOTIFY_CLIENT_SECRET: client_secret, SPOTIFY_REFRESH_TOKEN: refresh_token } = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

interface SpotifyAccessTokenResponse {
  access_token: string;
}

interface SpotifyCurrentlyPlayingResponse {
  currently_playing_type: string;
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: { name: string }[];
      images: { url: string }[];
    };
    external_urls: { spotify: string };
  };
}

const getAccessToken = async (): Promise<string> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  const data: SpotifyAccessTokenResponse = await response.json();
  return data.access_token;
};

const getNowPlaying = async (): Promise<Response> => {
  const access_token = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const GET = async (_: NextRequest): Promise<NextResponse> => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const data: SpotifyCurrentlyPlayingResponse = await response.json();

  if (data.currently_playing_type !== 'track') {
    return NextResponse.json({ isPlaying: false });
  }

  const nowPlayingData = {
    isPlaying: data.is_playing,
    title: data.item.name,
    album: data.item.album.name,
    artist: data.item.album.artists.map((artist) => artist.name).join(', '),
    albumImageUrl: data.item.album.images[0].url,
    songUrl: data.item.external_urls.spotify,
  };

  return NextResponse.json(nowPlayingData);
};
