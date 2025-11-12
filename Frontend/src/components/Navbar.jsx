import { Menu, X, Mountain } from "lucide-react";
import { useState } from "react";

export function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Mountain className="h-8 w-8 text-[#10B981]" />
            <span className="text-gray-900 tracking-wide">RINJA</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('information')}
              className={`transition-all ${
                currentPage === 'information' 
                  ? 'text-[#10B981] font-semibold border-b-2 border-[#10B981] pb-1' 
                  : 'text-gray-600 hover:text-[#10B981]'
              }`}
            >
              Information
            </button>
            <button
              onClick={() => handleNavigation('news')}
              className={`transition-all ${
                currentPage === 'news' 
                  ? 'text-[#10B981] font-semibold border-b-2 border-[#10B981] pb-1' 
                  : 'text-gray-600 hover:text-[#10B981]'
              }`}
            >
              News
            </button>
            <button
              onClick={() => handleNavigation('regulation')}
              className={`transition-all ${
                currentPage === 'regulation' 
                  ? 'text-[#10B981] font-semibold border-b-2 border-[#10B981] pb-1' 
                  : 'text-gray-600 hover:text-[#10B981]'
              }`}
            >
              Regulations
            </button>
          </div>

          {/* ... sisa JSX ... */}
        </div>
      </div>

      {/* ... sisa JSX (Mobile Menu) ... */}
    </nav>
  );
}