// context/PlayerContext.js

import React, { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayerContext.Provider
      value={{ currentTrack, setCurrentTrack, isPlaying, setIsPlaying }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
