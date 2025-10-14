import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Story from "./pages/Story";
import ProductsPage from "./pages/ProductsPage";
import ProcessPage from "./pages/ProcessPage";
import ImpactPage from "./pages/ImpactPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import LoadingIndicator from "./components/LoadingIndicator";
import ChatBot from "./components/ChatBot";
import Gallery from "./pages/Gallery";
import Documents from "./pages/Documents";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode='wait'>
          {isLoading ? (
            <LoadingIndicator key='loading' />
          ) : (
            <BrowserRouter key='content'>
              <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/story' element={<Story />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/process' element={<ProcessPage />} />
                <Route path='/impact' element={<ImpactPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/documents' element={<Documents />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path='*' element={<NotFound />} />
              </Routes>
              <ChatBot />
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
