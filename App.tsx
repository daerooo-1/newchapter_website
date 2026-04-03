import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ResidentialInspections } from "./pages/ResidentialInspections";
import { CommercialInspections } from "./pages/CommercialInspections";
import { BuildingConsulting } from "./pages/BuildingConsulting";
import { Pricing } from "./pages/Pricing";
import { Admin } from "./pages/Admin";
import { About } from "./pages/About";
import { SampleReport } from "./pages/SampleReport";

// Layout wrapper to ensure Navbar and Footer are present on all pages
const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (!params.has("scroll")) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ContentProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/residential" element={<ResidentialInspections />} />
            <Route path="services/commercial" element={<CommercialInspections />} />
            <Route path="services/consulting" element={<BuildingConsulting />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="sample-report" element={<SampleReport />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </HashRouter>
    </ContentProvider>
  );
}