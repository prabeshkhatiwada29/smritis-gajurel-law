import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-law-navy text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-law-gold pb-2">Gajurel Law Firm</h3>
            <p className="mb-4">Committed to providing exceptional legal representation with integrity and dedication.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-law-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-law-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-law-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-law-gold pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-law-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-law-gold transition-colors">About</Link></li>
              <li><Link to="/practice-areas" className="hover:text-law-gold transition-colors">Practice Areas</Link></li>
              <li><Link to="/contact" className="hover:text-law-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-law-gold pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span> Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+9779849551776</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@gajurellawfirm.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {currentYear} Gajurel Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};