import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CraftRoots from "./pages/CraftRoots.tsx";
import ThinkFloor from "./pages/ThinkFloor.tsx";
import ReEarth from "./pages/ReEarth.tsx";
import SubspaceTeardown from "./pages/SubspaceTeardown.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thinking" element={<Index targetSection="thinking" />} />
          <Route path="/work" element={<Index targetSection="work" />} />
          <Route path="/journey" element={<Index targetSection="journey" />} />
          <Route path="/writing" element={<Index targetSection="writing" />} />
          <Route path="/work/craftroots" element={<CraftRoots />} />
          <Route path="/work/thinkfloor" element={<ThinkFloor />} />
          <Route path="/work/reearth" element={<ReEarth />} />
          <Route path="/work/subspace-teardown" element={<SubspaceTeardown />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
