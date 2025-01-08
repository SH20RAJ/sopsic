'use client';

import { ChevronLeft, ChevronRight, User, Bell } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 z-50 bg-black/75 backdrop-blur-sm w-full px-4 md:px-6 py-2 md:py-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => router.back()}
            className="rounded-full bg-black/40 p-1 hover:bg-black/60 transition-colors md:p-2"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button 
            onClick={() => router.forward()}
            className="rounded-full bg-black/40 p-1 hover:bg-black/60 transition-colors md:p-2"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Notifications - Desktop only */}
          <button className="hidden md:flex rounded-full bg-black/40 p-2 hover:bg-black/60 transition-colors">
            <Bell size={20} className="text-white" />
          </button>

          {/* User menu */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/signup"
              className="text-gray-400 hover:text-white transition px-3 py-1 text-sm hidden md:block"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="bg-white text-black px-4 py-1 md:px-6 md:py-2 rounded-full hover:scale-105 transition text-sm font-medium"
            >
              Log in
            </Link>
            <button className="rounded-full bg-black/40 p-1 hover:bg-black/60 transition-colors md:p-2">
              <User size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
