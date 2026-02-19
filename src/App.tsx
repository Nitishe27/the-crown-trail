import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Compass from "./pages/clues/Compass";
import TheMap from "./pages/clues/TheMap";
import MagnifyingGlass from "./pages/clues/MagnifyingGlass";
import IronKey from "./pages/clues/IronKey";
import Telescope from "./pages/clues/Telescope";
import RoyalScroll from "./pages/clues/RoyalScroll";
import Hourglass from "./pages/clues/Hourglass";
import Lantern from "./pages/clues/Lantern";
import Footprints from "./pages/clues/Footprints";
import CrownFound from "./pages/clues/CrownFound";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/compass" element={<Compass />} />
          <Route path="/the-map" element={<TheMap />} />
          <Route path="/magnifying-glass" element={<MagnifyingGlass />} />
          <Route path="/iron-key" element={<IronKey />} />
          <Route path="/telescope" element={<Telescope />} />
          <Route path="/royal-scroll" element={<RoyalScroll />} />
          <Route path="/hourglass" element={<Hourglass />} />
          <Route path="/lantern" element={<Lantern />} />
          <Route path="/footprints" element={<Footprints />} />
          <Route path="/crown-found" element={<CrownFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
