import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Artigos from "./pages/Artigos.tsx";
import Emancipacao from "./pages/artigos/Emancipacao.tsx";
import GuardaCompartilhada from "./pages/artigos/GuardaCompartilhada.tsx";
import ComunhaoParcialBens from "./pages/artigos/ComunhaoParcialBens.tsx";
import PensaoSocioafetiva from "./pages/artigos/PensaoSocioafetiva.tsx";
import DireitosGenitor from "./pages/artigos/DireitosGenitor.tsx";
import DanosMorais from "./pages/artigos/DanosMorais.tsx";
import UniaoEstavel from "./pages/artigos/UniaoEstavel.tsx";
import Concubinato from "./pages/artigos/Concubinato.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/artigos/emancipacao" element={<Emancipacao />} />
          <Route path="/artigos/guarda-compartilhada" element={<GuardaCompartilhada />} />
          <Route path="/artigos/comunhao-parcial-de-bens" element={<ComunhaoParcialBens />} />
          <Route path="/artigos/pensao-socioafetiva" element={<PensaoSocioafetiva />} />
          <Route path="/artigos/direitos-do-genitor" element={<DireitosGenitor />} />
          <Route path="/artigos/danos-morais-direito-de-familia" element={<DanosMorais />} />
          <Route path="/artigos/uniao-estavel" element={<UniaoEstavel />} />
          <Route path="/artigos/concubinato" element={<Concubinato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
