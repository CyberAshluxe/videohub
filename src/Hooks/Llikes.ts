"use client";

import { useState, useEffect } from "react";
import { getLikes, setLike } from "../Lib/LocalStorage";

export function useLikes() {
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setLikes(getLikes());
  }, []);

  const toggleLike = (videoId: string) => {
    const newLikedState = !likes[videoId];
    setLike(videoId, newLikedState);
    setLikes(getLikes());
  };

  const isVideoLiked = (videoId: string) => {
    return likes[videoId] === true;
  };

  return { likes, toggleLike, isVideoLiked };
}
