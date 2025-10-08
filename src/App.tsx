import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import VideoPage from "./Pages/PageTwo";
import NotFound from "./Pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
