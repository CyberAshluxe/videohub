export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  genre: string
  videoUrl: string
}

export interface LikeState {
  [videoId: string]: boolean
}
