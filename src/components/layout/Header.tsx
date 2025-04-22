
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-law-navy font-serif text-2xl font-bold">Gajurel Law Firm</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks className="text-law-darkgray hover:text-law-gold transition-colors" />
          <Button asChild className="bg-law-navy hover:bg-opacity-90 text-white rounded transition-all">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-law-navy focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLinks className="block py-2 text-law-darkgray hover:text-law-gold transition-colors" onClick={() => setIsMenuOpen(false)} />
            <Button asChild className="bg-law-navy hover:bg-opacity-90 text-white rounded w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book a Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

// Extracted component for navigation links
const NavLinks = ({ className = "", onClick = () => {} }) => (
  <>
    <Link to="/" className={className} onClick={onClick}>Home</Link>
    <Link to="/about" className={className} onClick={onClick}>About</Link>
    <Link to="/practice-areas" className={className} onClick={onClick}>Practice Areas</Link>
    <Link to="/contact" className={className} onClick={onClick}>Contact</Link>
  </>
);
