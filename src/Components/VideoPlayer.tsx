"use client"

import { useRef, useEffect } from "react"

interface VideoPlayerProps {
  src: string
  title: string
}

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [src])

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
      <video ref={videoRef} controls className="h-full w-full" aria-label={`Video player for ${title}`}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
