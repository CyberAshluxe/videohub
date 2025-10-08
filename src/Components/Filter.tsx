"use client";

import { Button } from "./ui/button";
import { cn } from "../Lib/utils";

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string | null;
  onSelectGenre: (genre: string | null) => void;
}

export function GenreFilter({
  genres,
  selectedGenre,
  onSelectGenre,
}: GenreFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedGenre === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectGenre(null)}
        className={cn(
          "transition-colors",
          selectedGenre === null && "bg-primary text-primary-foreground"
        )}
      >
        All
      </Button>
      {genres.map((genre) => (
        <Button
          key={genre}
          variant={selectedGenre === genre ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectGenre(genre)}
          className={cn(
            "transition-colors",
            selectedGenre === genre && "bg-primary text-primary-foreground"
          )}
        >
          {genre}
        </Button>
      ))}
    </div>
  );
}
