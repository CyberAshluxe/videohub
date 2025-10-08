"use client";

import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "../Icons/Props";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav
      className="flex items-center justify-center gap-2"
      role="navigation"
      aria-label="Pagination navigation"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isCurrentPage = page === currentPage;
          const showPage =
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1);

          if (!showPage) {
            if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <span key={page} className="px-2 text-muted-foreground">
                  ...
                </span>
              );
            }
            return null;
          }

          return (
            <Button
              key={page}
              variant={isCurrentPage ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
              aria-label={`Go to page ${page}`}
              aria-current={isCurrentPage ? "page" : undefined}
              className="min-w-[2.5rem]"
            >
              {page}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        aria-label="Go to react page"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}
