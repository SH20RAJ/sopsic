import { mockPlaylists } from './mockData';

const SAAVN_API_BASE_URL = 'https://saavn.dev/api';

export const searchSongs = async (query) => {
  try {
    // Return filtered songs from mock data based on search query
    const allSongs = mockPlaylists.playlists.flatMap(playlist => playlist.songs);
    const filteredSongs = allSongs.filter(song => 
      song.name.toLowerCase().includes(query.toLowerCase()) ||
      song.primaryArtists.toLowerCase().includes(query.toLowerCase())
    );
    return filteredSongs;
  } catch (error) {
    console.error('Error searching songs:', error);
    return [];
  }
};

export const getTopCharts = async () => {
  try {
    // Return mock playlists data
    return mockPlaylists;
  } catch (error) {
    console.error('Error fetching top charts:', error);
    return { playlists: [] };
  }
};

export const getSongDetails = async (id) => {
  try {
    // Find song in mock data
    const allSongs = mockPlaylists.playlists.flatMap(playlist => playlist.songs);
    return allSongs.find(song => song.id === id) || null;
  } catch (error) {
    console.error('Error fetching song details:', error);
    return null;
  }
};

export const getAlbumDetails = async (id) => {
  try {
    // Mock album details
    return {
      id,
      name: "Sample Album",
      songs: mockPlaylists.playlists[0].songs
    };
  } catch (error) {
    console.error('Error fetching album details:', error);
    return null;
  }
};
