// components/Player.js

import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { usePlayer } from "@/context/PlayerContext";

export default function Player() {
  const { currentTrack, isPlaying, setIsPlaying } = usePlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 shadow-lg z-50">
      <div className=" ">
        <div className="w-full flex items-center justify-center">
          <img
            src={
              currentTrack?.artwork ||
              "https://c.saavncdn.com/763/Fateh-Hindi-2024-20250103050031-150x150.jpg?bch=482269"
            }
            alt="Album Art"
            className="w-1/6 h-12 object-cover rounded-lg mr-3"
          />
          <AudioPlayer
            src={currentTrack?.url}
            autoPlay={false}
            showSkipControls={false}
            showJumpControls={false}
            showFilledVolume={false}
            layout="stacked"
            header={
              <div>
                <p className="text-sm font-bold truncate">
                  {currentTrack?.title || "No Track Selected"}
                </p>
              </div>
            }
            footer={null}
            volume={0.8}
            style={{
              backgroundColor: "transparent",
              backgroundImage:
                "https://c.saavncdn.com/763/Fateh-Hindi-2024-20250103050031-150x150.jpg?bch=482269",
              boxShadow: "none",
            }}
            customStyles={{
              track: {
                background: "#4B5563",
              },
              rail: {
                background: "#1F2937",
              },
              knob: {
                background: "#3B82F6",
              },
              progressBar: {
                background: "#3B82F6",
              },
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
        <div className="flex items-center mt-2"></div>
      </div>
    </div>
  );
}
