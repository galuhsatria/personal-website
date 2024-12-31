import { NextRequest, NextResponse } from 'next/server';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

const token = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// Shorter cache times for more frequent updates
const CACHE_MAX_AGE = 30; // 30 seconds max age
const STALE_WHILE_REVALIDATE = 15; // 15 seconds stale while revalidate

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: Array<{ url: string }>;
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function getNowPlaying(access_token: string) {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    // Disable caching at this level to ensure fresh data
    cache: 'no-store',
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  return response.json();
}

export async function GET(request: NextRequest) {
  try {
    const responseHeaders = {
      'Content-Type': 'application/json',
      'Cache-Control': `public, s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
    };

    // Get fresh access token
    const access_token = await getAccessToken();
    
    // Get currently playing track
    const response = await getNowPlaying(access_token);

    if (!response || response.currently_playing_type !== 'track') {
      return NextResponse.json(
        { isPlaying: false },
        { headers: responseHeaders }
      );
    }

    const data = {
      isPlaying: response.is_playing,
      title: response.item.name,
      album: response.item.album.name,
      artist: response.item.album.artists.map((artist: { name: string }) => artist.name).join(', '),
      albumImageUrl: response.item.album.images[0].url,
      songUrl: response.item.external_urls.spotify,
    };

    return NextResponse.json(data, { headers: responseHeaders });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json(
      { error: 'Failed to load currently playing track' },
      { status: 500 }
    );
  }
}

// Enable edge runtime for better performance
export const runtime = 'edge';