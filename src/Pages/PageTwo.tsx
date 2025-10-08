"use client";

import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Heart } from "../Icons/Props";
import { Header } from "../Components/Header";
import { VideoPlayer } from "../Components/VideoPlayer";
import { RelatedVideos } from "../Components/RelatedVideos";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { useLikes } from "../Hooks/Llikes";
import { cn } from "../Lib/utils";
import videosData from "../Data/videos.json";
import { setLastViewedVideo } from "../Lib/LocalStorage";

export default function VideoPage() {
  const params = useParams();
  const id = params.id ?? "";
  const { toggleLike, isVideoLiked } = useLikes();

  const video = videosData.find((v) => v.id === id);

  if (!video) {
    return <Navigate to="/not-found" replace />;
  }

  const isLiked = isVideoLiked(video.id);

  useEffect(() => {
    setLastViewedVideo(video.id);
    return () => {
      // keep last viewed video; to clear it on unmount use: setLastViewedVideo(null)
    };
  }, [video.id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to videos
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <VideoPlayer src={video.videoUrl} title={video.title} />

            <div className="mt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {video.title}
                  </h1>
                  <div className="mt-3 flex items-center gap-3">
                    <Badge variant="secondary">{video.genre}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => toggleLike(video.id)}
                  aria-label={isLiked ? "Unlike video" : "Like video"}
                >
                  <Heart
                    className={cn(
                      "mr-2 h-5 w-5 transition-colors",
                      isLiked ? "fill-red-500 text-red-500" : ""
                    )}
                  />
                  {isLiked ? "Liked" : "Like"}
                </Button>
              </div>

              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <h2 className="mb-3 text-lg font-semibold text-card-foreground">
                  Description
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold text-card-foreground">
                Video Details
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Genre
                  </dt>
                  <dd className="mt-1 text-base text-card-foreground">
                    {video.genre}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Duration
                  </dt>
                  <dd className="mt-1 text-base text-card-foreground">
                    {video.duration}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Video ID
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-card-foreground">
                    {video.id}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <RelatedVideos videos={videosData} currentVideoId={video.id} />
      </main>
    </div>
  );
}
