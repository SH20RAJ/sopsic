"use client";
import NavBar from "@/components/NavBar";
import Player from "@/components/Player";
import { PlayerProvider } from "@/context/PlayerContext";

export default function RootLayout({ children }) {
  return (
    <>
      <PlayerProvider>
        <NavBar />
        <main className="">{children}</main>
        <Player />
      </PlayerProvider>
    </>
  );
}
