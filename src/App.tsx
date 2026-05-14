import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Artigos from "./pages/Artigos";
import Emancipacao from "./pages/artigos/Emancipacao";
import GuardaCompartilhada from "./pages/artigos/GuardaCompartilhada";
import ComunhaoParcialBens from "./pages/artigos/ComunhaoParcialBens";
import PensaoSocioafetiva from "./pages/artigos/PensaoSocioafetiva";
import DireitosGenitor from "./pages/artigos/DireitosGenitor";
import DanosMorais from "./pages/artigos/DanosMorais";
import UniaoEstavel from "./pages/artigos/UniaoEstavel";
import Concubinato from "./pages/artigos/Concubinato";
import DivorcioOnline from "./pages/artigos/DivorcioOnline";
import GuiaCompletoDivorcio from "./pages/artigos/GuiaCompletoDivorcio";
import QuantoCustaDivorcio from "./pages/artigos/QuantoCustaDivorcio";
import DivorcioUnilateral from "./pages/artigos/DivorcioUnilateral";
import AlimentosCompensatorios from "./pages/artigos/AlimentosCompensatorios";
import PensaoRetroativa from "./pages/artigos/PensaoRetroativa";
import GuardaDosFilhos from "./pages/artigos/GuardaDosFilhos";
import PensaoFilhoAutismo from "./pages/artigos/PensaoFilhoAutismo";
import DebugErrorThrower from "./components/DebugErrorThrower";
import ErrorDebugPopup from "./components/ErrorDebugPopup";
import FraudAlertBanner from "./components/FraudAlertBanner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <DebugErrorThrower />
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
              <Route path="/artigos/direitos-genitor" element={<DireitosGenitor />} />
              <Route path="/artigos/danos-morais" element={<DanosMorais />} />
              <Route path="/artigos/uniao-estavel" element={<UniaoEstavel />} />
              <Route path="/artigos/concubinato" element={<Concubinato />} />
              <Route path="/artigos/divorcio-online" element={<DivorcioOnline />} />
              <Route path="/artigos/guia-completo-divorcio" element={<GuiaCompletoDivorcio />} />
              <Route path="/artigos/quanto-custa-divorcio" element={<QuantoCustaDivorcio />} />
              <Route path="/artigos/divorcio-unilateral" element={<DivorcioUnilateral />} />
              <Route path="/artigos/alimentos-compensatorios" element={<AlimentosCompensatorios />} />
              <Route path="/artigos/pensao-retroativa" element={<PensaoRetroativa />} />
              <Route path="/artigos/guarda-dos-filhos" element={<GuardaDosFilhos />} />
              <Route path="/artigos/pensao-filho-autismo" element={<PensaoFilhoAutismo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ErrorDebugPopup />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
