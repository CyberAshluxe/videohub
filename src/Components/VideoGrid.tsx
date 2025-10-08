"use client";

import type { Video } from "../Lib/Types";
import { VideoCard } from "./Card";
import { useLikes } from "../Hooks/Llikes";

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  const { toggleLike, isVideoLiked } = useLikes();

  if (videos.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg text-muted-foreground">No videos found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          isLiked={isVideoLiked(video.id)}
          onToggleLike={toggleLike}
        />
      ))}
    </div>
  );
}
