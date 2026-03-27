import { useEffect, useState } from "react";
import usePWAEnvironment from "../hooks/usePWAEnvironment";
import SplashPage from "./SplashPage";
import AppRoot from "../app/AppRoot";
import HomePage from "./HomePage";

let hasShownSplash = false;

const AppEntry = () => {
  const { isIOSPWA } = usePWAEnvironment();
  const [showSplash, setShowSplash] = useState(isIOSPWA);

  // Auto-hide splash after 1s for PWA
  useEffect(() => {
    if (isIOSPWA && showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        hasShownSplash = true;
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isIOSPWA, showSplash]);

  // PWA: Show splash first
  if (showSplash && !hasShownSplash) {
    return <SplashPage />;
  }

  return (
    <AppRoot>
      <HomePage />
    </AppRoot>
  );
};

export default AppEntry;
