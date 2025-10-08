"use client";

import type { Video } from "../Lib/Types";
import { Link } from "react-router-dom";

interface RelatedVideosProps {
  videos: Video[];
  currentVideoId: string;
}

export function RelatedVideos({ videos, currentVideoId }: RelatedVideosProps) {
  const relatedVideos = videos
    .filter((v) => v.id !== currentVideoId)
    .slice(0, 4);

  if (relatedVideos.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
        Related Videos
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {relatedVideos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="group flex flex-col gap-2"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white">
                {video.duration}
              </div>
            </div>
            <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
              {video.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
