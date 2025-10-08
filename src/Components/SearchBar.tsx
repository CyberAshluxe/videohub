"use client";

import { Search } from "../Icons/Props";
import { Input } from "./ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search videos by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
        aria-label="Search videos"
      />
    </div>
  );
}
