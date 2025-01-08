'use client';

import { Home, Search, Library, Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-[72px] left-0 right-0 bg-gradient-to-t from-black via-black/95 to-black/90 border-t border-gray-800/50 px-3 py-1.5">
      <div className="flex justify-around items-center">
        <Link
          href="/"
          className={`flex flex-col items-center py-1 px-3 ${
            pathname === '/' ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Home size={22} />
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </Link>
        
        <Link
          href="/search"
          className={`flex flex-col items-center py-1 px-3 ${
            pathname === '/search' ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Search size={22} />
          <span className="text-[10px] mt-1 font-medium">Search</span>
        </Link>
        
        <Link
          href="/library"
          className={`flex flex-col items-center py-1 px-3 ${
            pathname === '/library' ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Library size={22} />
          <span className="text-[10px] mt-1 font-medium">Library</span>
        </Link>
        
        <Link
          href="/liked"
          className={`flex flex-col items-center py-1 px-3 ${
            pathname === '/liked' ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Heart size={22} />
          <span className="text-[10px] mt-1 font-medium">Liked</span>
        </Link>
      </div>
    </nav>
  );
}
