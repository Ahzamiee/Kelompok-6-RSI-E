import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { InformationPage } from "./pages/InformationPage";
import { NewsPage } from "./pages/NewsPage";
import { RegulationPage } from "./pages/RegulationPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'information':
        return <InformationPage />;
      case 'news':
        return <NewsPage />;
      case 'regulation':
        return <RegulationPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* PASTIKAN TIDAK ADA 'pt-16' DI SINI */}
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}