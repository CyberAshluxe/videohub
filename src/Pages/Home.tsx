"use client";

import { useState, useMemo, useEffect } from "react";
import { Header } from "../Components/Header";
import { VideoGrid } from "../Components/VideoGrid";
import { SearchBar } from "../Components/SearchBar";
import { GenreFilter } from "../Components/Filter";
import { Pagination } from "../Components/Pagination";
import videosData from "../Data/videos.json";
import { getHomeState, setHomeState } from "../Lib/LocalStorage";

const VIDEOS_PER_PAGE = 8;

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // load saved home state
  useEffect(() => {
    const saved = getHomeState();
    if (saved.searchQuery) setSearchQuery(saved.searchQuery);
    if (typeof saved.selectedGenre !== "undefined")
      setSelectedGenre(saved.selectedGenre ?? null);
    if (saved.currentPage) setCurrentPage(saved.currentPage);
  }, []);


  useEffect(() => {
    setHomeState({ searchQuery, selectedGenre, currentPage });
  }, [searchQuery, selectedGenre, currentPage]);

  const genres = useMemo(() => {
    const uniqueGenres = new Set(videosData.map((video) => video.genre));
    return Array.from(uniqueGenres).sort();
  }, []);

  const filteredVideos = useMemo(() => {
    return videosData.filter((video) => {
      const matchesSearch = video.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === null || video.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, selectedGenre]);

  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedGenre]);

  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const endIndex = startIndex + VIDEOS_PER_PAGE;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Discover Videos
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Browse our collection of curated content
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Filter by genre
            </label>
            <GenreFilter
              genres={genres}
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredVideos.length)}{" "}
            of {filteredVideos.length} videos
          </p>
        </div>

        <VideoGrid videos={paginatedVideos} />

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </main>
    </div>
  );
}
