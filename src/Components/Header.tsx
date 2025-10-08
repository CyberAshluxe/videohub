import { Link } from "react-router-dom";
import { Play } from "../Icons/Props";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          aria-label="VideoHub home"
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary"
            aria-hidden="true"
          >
            <Play className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
          </div>
          <span className="font-serif text-2xl font-bold text-foreground">
            VideoHub
          </span>
        </Link>
      </div>
    </header>
  );
}
