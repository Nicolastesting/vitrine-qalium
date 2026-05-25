import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { ContactPage } from "./pages/ContactPage";
import { DevelopersPage } from "./pages/DevelopersPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PricingPage } from "./pages/PricingPage";
import { VisionPage } from "./pages/VisionPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="fonctionnalites" element={<FeaturesPage />} />
          <Route path="prix" element={<PricingPage />} />
          <Route path="developers" element={<DevelopersPage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
