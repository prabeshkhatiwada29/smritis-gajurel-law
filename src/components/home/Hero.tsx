
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative bg-law-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Justice With</span>
            <span className="block text-law-gold">Dedication & Integrity</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Gajurel Law Firm provides expert legal services with a personalized approach. 
            We're committed to understanding your needs and delivering results.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-law-gold hover:bg-opacity-90 text-law-navy font-semibold px-6 py-3 rounded">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-law-navy px-6 py-3 rounded">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
