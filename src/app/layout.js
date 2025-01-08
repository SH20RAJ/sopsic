import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Player from "@/components/layout/Player";
import { MobileNav } from "@/components/layout/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sopsic - Music Streaming Website",
  description:
    "Stream and download music from JioSaavn library. Modern music streaming experience inspired by JioSaavn and Spotify.",
  keywords:
    "music streaming, JioSaavn, music download, online music, songs, albums, playlists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="flex h-screen">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          
          <main className="flex-1 overflow-y-auto pt-16 pb-24">
            <Header />
            {children}
          </main>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>
        
        <Player />
      </body>
    </html>
  );
}
