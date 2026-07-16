import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const Artigos = lazy(() => import("./pages/Artigos"));
const Emancipacao = lazy(() => import("./pages/artigos/Emancipacao"));
const GuardaCompartilhada = lazy(() => import("./pages/artigos/GuardaCompartilhada"));
const ComunhaoParcialBens = lazy(() => import("./pages/artigos/ComunhaoParcialBens"));
const PensaoSocioafetiva = lazy(() => import("./pages/artigos/PensaoSocioafetiva"));
const DireitosGenitor = lazy(() => import("./pages/artigos/DireitosGenitor"));
const DanosMorais = lazy(() => import("./pages/artigos/DanosMorais"));
const UniaoEstavel = lazy(() => import("./pages/artigos/UniaoEstavel"));
const Concubinato = lazy(() => import("./pages/artigos/Concubinato"));
const DivorcioOnline = lazy(() => import("./pages/artigos/DivorcioOnline"));
const GuiaCompletoDivorcio = lazy(() => import("./pages/artigos/GuiaCompletoDivorcio"));
const QuantoCustaDivorcio = lazy(() => import("./pages/artigos/QuantoCustaDivorcio"));
const DivorcioUnilateral = lazy(() => import("./pages/artigos/DivorcioUnilateral"));
const AlimentosCompensatorios = lazy(() => import("./pages/artigos/AlimentosCompensatorios"));
const PensaoRetroativa = lazy(() => import("./pages/artigos/PensaoRetroativa"));
const GuardaDosFilhos = lazy(() => import("./pages/artigos/GuardaDosFilhos"));
const PensaoFilhoAutismo = lazy(() => import("./pages/artigos/PensaoFilhoAutismo"));
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
            
            <Suspense fallback={null}>
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
            </Suspense>
            <ErrorDebugPopup />

          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
