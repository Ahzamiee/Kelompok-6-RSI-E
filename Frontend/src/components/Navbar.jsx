import { Menu, X, Mountain } from "lucide-react";
import { useState } from "react";

export function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            {/* --- Teks dan Ikon kembali jadi PUTIH --- */}
            <Mountain className="h-8 w-8 text-white" />
            <span className="text-white tracking-wide">RINJA</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('information')}
              className={`transition-all ${
                currentPage === 'information' 
                  ? 'text-white font-semibold border-b-2 border-white pb-1' 
                  : 'text-white/80 hover:text-white' 
              }`}
            >
              Information
            </button>
            <button
              onClick={() => handleNavigation('news')}
              className={`transition-all ${
                currentPage === 'news' 
                  ? 'text-white font-semibold border-b-2 border-white pb-1' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              News
            </button>
            <button
              onClick={() => handleNavigation('regulation')}
              className={`transition-all ${
                currentPage === 'regulation' 
                  ? 'text-white font-semibold border-b-2 border-white pb-1' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Regulations
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Ini sudah benar, biarkan saja) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavigation('information')}
              className={`block w-full text-left transition-colors py-2 px-3 rounded-lg ${
                currentPage === 'information' 
                  ? 'text-[#10B981] font-semibold bg-[#10B981]/10' 
                  : 'text-gray-600 hover:text-[#10B981] hover:bg-[#10B981]/5'
              }`}
            >
              Information
            </button>
            <button
              onClick={() => handleNavigation('news')}
              className={`block w-full text-left transition-colors py-2 px-3 rounded-lg ${
                currentPage === 'news' 
                  ? 'text-[#10B981] font-semibold bg-[#10B981]/10' 
                  : 'text-gray-600 hover:text-[#10B981] hover:bg-[#10B981]/5'
              }`}
            >
              News
            </button>
            <button
              onClick={() => handleNavigation('regulation')}
              className={`block w-full text-left transition-colors py-2 px-3 rounded-lg ${
                currentPage === 'regulation' 
                  ? 'text-[#10B981] font-semibold bg-[#10B981]/10' 
                  : 'text-gray-600 hover:text-[#10B981] hover:bg-[#10B981]/5'
              }`}
            >
              Regulations
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}