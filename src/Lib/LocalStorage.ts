"use client";

const LIKES_KEY = "video-likes";

const HOME_STATE_KEY = "home-state";
const LAST_VIEWED_KEY = "last-viewed-video";

export function getLikes(): Record<string, boolean> {
  if (typeof window === "undefined") return {};

  try {
    const stored = localStorage.getItem(LIKES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function setLike(videoId: string, liked: boolean): void {
  if (typeof window === "undefined") return;

  try {
    const likes = getLikes();
    if (liked) {
      likes[videoId] = true;
    } else {
      delete likes[videoId];
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
  } catch (error) {
    console.error("Failed to save like:", error);
  }
}

export function isLiked(videoId: string): boolean {
  const likes = getLikes();
  return likes[videoId] === true;
}

export type HomeState = {
  searchQuery?: string;
  selectedGenre?: string | null;
  currentPage?: number;
};

export function getHomeState(): HomeState {
  if (typeof window === "undefined") return {};

  try {
    const stored = localStorage.getItem(HOME_STATE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function setHomeState(state: HomeState): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(HOME_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save home state:", error);
  }
}

export function setLastViewedVideo(videoId: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (videoId) localStorage.setItem(LAST_VIEWED_KEY, videoId);
    else localStorage.removeItem(LAST_VIEWED_KEY);
  } catch (error) {
    console.error("Failed to save last viewed video:", error);
  }
}

export function getLastViewedVideo(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(LAST_VIEWED_KEY);
  } catch {
    return null;
  }
}
