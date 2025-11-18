import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import Hakkimizda from "./pages/Hakkimizda";
import SSS from "./pages/SSS";
import Iletisim from "./pages/Iletisim";
import GizlilikPolitikasi from "./pages/GizlilikPolitikasi";
import Kargo from "./pages/Kargo";
import Iade from "./pages/Iade";
import Odeme from "./pages/Odeme";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/urunler" element={<Products />} />
              <Route path="/urun/:id" element={<ProductDetail />} />
              <Route path="/sepet" element={<Cart />} />
              <Route path="/siparis-tamamla" element={<Checkout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/hakkimizda" element={<Hakkimizda />} />
              <Route path="/sss" element={<SSS />} />
              <Route path="/iletisim" element={<Iletisim />} />
              <Route path="/gizlilik" element={<GizlilikPolitikasi />} />
              <Route path="/kargo" element={<Kargo />} />
              <Route path="/iade" element={<Iade />} />
              <Route path="/odeme-secenekleri" element={<Odeme />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
