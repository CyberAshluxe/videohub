"use client";

import { Heart } from "../Icons/Props";
import { Link } from "react-router-dom";
import type { Video } from "../Lib/Types";
import { Button } from "./ui/button";
import { cn } from "../Lib/utils";

interface VideoCardProps {
  video: Video;
  isLiked: boolean;
  onToggleLike: (videoId: string) => void;
}

export function VideoCard({ video, isLiked, onToggleLike }: VideoCardProps) {
  return (
    <article className="group relative flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <Link
        to={`/video/${video.id}`}
        className="relative aspect-video overflow-hidden rounded-lg bg-muted  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={`Watch ${video.title}`}
      >
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute bottom-2 right-2 rounded bg-black/80 px-2  py-1 text-xs font-medium text-white"
          aria-label={`Duration: ${video.duration}`}
        >
          {video.duration}
        </div>
      </Link>

      <div className="flex items-start justify-between gap-2">
        <Link
          to={`/video/${video.id}`}
          className="flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground transition-colors hover:text-primary">
            {video.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{video.genre}</p>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="shrink-0"
          onClick={(e) => {
            e.preventDefault();
            onToggleLike(video.id);
          }}
          aria-label={isLiked ? `Unlike ${video.title}` : `Like ${video.title}`}
          aria-pressed={isLiked}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isLiked
                ? "fill-red-500 text-red-500"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-hidden="true"
          />
        </Button>
      </div>
    </article>
  );
}
