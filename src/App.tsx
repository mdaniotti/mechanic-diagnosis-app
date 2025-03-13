import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/Home.tsx";
import AutoDetail from "./pages/AutoDetail.tsx";
import CreateDiagnosis from "./pages/CreateDiagnosis.tsx";
import DiagnosisDetail from "./pages/DiagnosisDetail.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="d-flex flex-column min-vh-100 bg-dark">
          <Header />
          <div className="flex-grow-1 container py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/autos/:id" element={<AutoDetail />} />
              <Route
                path="/autos/:id/diagnostico"
                element={<CreateDiagnosis />}
              />
              <Route
                path="/autos/:id/diagnosticos/:diagnosticoId"
                element={<DiagnosisDetail />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
