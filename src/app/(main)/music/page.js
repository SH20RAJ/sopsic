// app/music/page.js
"use client";
import { usePlayer } from "@/context/PlayerContext";

export default function MusicPage() {
  const { setCurrentTrack } = usePlayer();

  const playTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div>
      <h1>Music Page</h1>
      <button
        onClick={() =>
          playTrack({
            title: "Song Title",
            artist: "Artist Name",
            url: "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_160.mp4",
          })
        }
      >
        Play This Track
      </button>
    </div>
  );
}
