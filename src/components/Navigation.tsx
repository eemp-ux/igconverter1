import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, BookOpen, MessageCircle } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 glass rounded-xl p-3 hover:bg-white/20 transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={toggleMenu}>
          <nav className="fixed top-0 right-0 h-full w-80 glass-card p-8 shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Developer Watermark */}
            <div className="mb-8 mt-16">
              <div className="glass rounded-lg px-4 py-2 text-center border border-white/20 inline-block">
                <span className="text-white/90 font-semibold text-sm tracking-wide">
                  IGC | by EMP
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 space-y-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                  isActive('/') 
                    ? 'bg-white/30 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Calculator className="w-5 h-5" />
                <span className="font-medium">Converter</span>
              </Link>

              <Link
                to="/v1"
                onClick={toggleMenu}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                  isActive('/v1') 
                    ? 'bg-white/30 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">V1 - Infographics</span>
              </Link>

              <Link
                to="/feedback"
                onClick={toggleMenu}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                  isActive('/feedback') 
                    ? 'bg-white/30 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Feedback</span>
              </Link>
            </div>

            {/* App Info */}
            <div className="mt-auto">
              <div className="glass rounded-xl p-4">
                <p className="text-white/60 text-sm">
                  Industrial Gas Converter
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Professional conversion tool
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
