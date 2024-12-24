import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppSidebar from "./components/AppSidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import ImagePage from "./pages/ImagePage";
import VideoPage from "./pages/VideoPage";
import DiscoverPage from "./pages/DiscoverPage";
import MemoPage from "./pages/MemoPage";
import MorePage from "./pages/MorePage";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1 ml-64 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/chat"
            element={
              <AppLayout>
                <Chat />
              </AppLayout>
            }
          />
          <Route
            path="/image"
            element={
              <AppLayout>
                <ImagePage />
              </AppLayout>
            }
          />
          <Route
            path="/video"
            element={
              <AppLayout>
                <VideoPage />
              </AppLayout>
            }
          />
          <Route
            path="/discover"
            element={
              <AppLayout>
                <DiscoverPage />
              </AppLayout>
            }
          />
          <Route
            path="/memo"
            element={
              <AppLayout>
                <MemoPage />
              </AppLayout>
            }
          />
          <Route
            path="/more"
            element={
              <AppLayout>
                <MorePage />
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;