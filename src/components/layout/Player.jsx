'use client'
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { useState } from 'react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-black/90 border-t border-gray-800/50 px-3 py-2 md:px-4 md:py-3">
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile Player */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 bg-gray-800 rounded-md flex-shrink-0"></div>
            <div className="min-w-0">
              <h4 className="text-sm font-medium text-white truncate">Song Name</h4>
              <p className="text-xs text-gray-400 truncate">Artist Name</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
            >
              {isPlaying ? (
                <Pause size={18} className="text-black" />
              ) : (
                <Play size={18} className="text-black ml-1" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Player */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Currently playing */}
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-14 h-14 bg-gray-800 rounded"></div>
            <div>
              <h4 className="text-sm text-white">Song Name</h4>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
          </div>

          {/* Player controls */}
          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-white transition">
                <Shuffle size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <SkipBack size={24} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white rounded-full p-2 hover:scale-105 transition"
              >
                {isPlaying ? (
                  <Pause size={24} className="text-black" />
                ) : (
                  <Play size={24} className="text-black ml-0.5" />
                )}
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <SkipForward size={24} />
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <Repeat size={20} />
              </button>
            </div>
            <div className="w-full flex items-center gap-2">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="h-1 flex-1 bg-gray-800 rounded-full">
                <div className="h-1 w-0 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">0:00</span>
            </div>
          </div>

          {/* Volume control */}
          <div className="flex items-center gap-2 w-1/3 justify-end">
            <Volume2 size={20} className="text-gray-400" />
            <div className="w-24 h-1 bg-gray-800 rounded-full">
              <div className="h-1 w-1/2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Progress Bar */}
      <div className="mt-1 md:hidden">
        <div className="h-1 w-full bg-gray-800/60 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
