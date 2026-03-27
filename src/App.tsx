import { Routes, Route, Navigate } from "react-router";
import useMobileOnlyGate from "./hooks/useMobileOnlyGate";
import usePWAEnvironment from "./hooks/usePWAEnvironment";
import LandingPage from "./pages/LandingPage";
import AppEntry from "./pages/AppEntry";
import MobileOnlyGate from "./pages/MobileOnlyGate";

const App = () => {
  const { shouldShowGate } = useMobileOnlyGate();
  const { isPWA } = usePWAEnvironment();

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {isPWA ? (
          <>
            <Route path="/" element={<Navigate to="/app" replace />} />
            <Route path="/app" element={<AppEntry />} />
            <Route path="*" element={<Navigate to="/app" replace />} />
          </>
        ) : (
          // Browser: Normal landing + app
          <>
            <Route index element={<LandingPage />} />
            <Route path="/app" element={<AppEntry />} />
            <Route path="*" element={<LandingPage />} />
          </>
        )}
      </Routes>

      {/* Mobile gate */}
      {shouldShowGate && <MobileOnlyGate />}
    </div>
  );
};

export default App;
