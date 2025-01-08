'use client';

import { useState } from 'react';
import { searchSongs } from '@/lib/saavn';
import { Search, Play, Clock } from 'lucide-react';
import Image from 'next/image';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const songs = await searchSongs(query);
      setResults(songs);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-6 py-4">
      <form onSubmit={handleSearch} className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </form>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-2">
          {/* Table header - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-4 text-sm text-gray-400 px-4 py-2">
            <div className="col-span-2"># TITLE</div>
            <div>ALBUM</div>
            <div className="flex items-center justify-end">
              <Clock size={16} />
            </div>
          </div>
          
          {/* Songs list */}
          {results.map((song, index) => (
            <div
              key={song.id}
              className="group flex flex-col md:grid md:grid-cols-4 md:gap-4 p-2 hover:bg-gray-800 rounded-lg transition cursor-pointer"
            >
              {/* Mobile view */}
              <div className="flex items-center gap-4 md:col-span-2">
                <div className="relative">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={song.image?.[2]?.link || "/placeholder.png"}
                      alt={song.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <button className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="text-white" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{song.name}</h3>
                  <p className="text-sm text-gray-400 truncate md:hidden">
                    {song.primaryArtists}
                  </p>
                </div>
              </div>

              {/* Desktop only info */}
              <div className="hidden md:block truncate text-gray-400">
                {song.album?.name || 'Single'}
              </div>
              <div className="hidden md:flex justify-end text-gray-400 text-sm">
                {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      ) : query && !loading ? (
        <div className="text-center text-gray-400">
          No results found for "{query}"
        </div>
      ) : null}
    </div>
  );
}
