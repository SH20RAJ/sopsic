import Link from 'next/link';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-[300px] bg-black p-6">
      <div className="flex flex-col gap-6">
        <Link href="/" className="text-2xl font-bold text-white">Sopsic</Link>
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link href="/search" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Search size={24} />
            <span>Search</span>
          </Link>
          <Link href="/library" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Library size={24} />
            <span>Your Library</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Plus size={24} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Heart size={24} />
            <span>Liked Songs</span>
          </button>
        </div>
      </div>
      <div className="mt-auto">
        <div className="text-xs text-gray-400">
          <p>© 2024 Sopsic</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
