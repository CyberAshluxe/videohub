import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import { Button } from "../Components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-serif text-6xl font-bold text-foreground">404</h1>
          <p className="mt-4 text-xl text-muted-foreground">Video not found</p>
          <p className="mt-2 text-muted-foreground">
            The video you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="mt-8">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
