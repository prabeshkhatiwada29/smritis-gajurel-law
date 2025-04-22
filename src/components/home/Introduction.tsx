
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Introduction = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
              Welcome to Gajurel Law Firm
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded by Smriti Gajurel, our firm combines deep legal expertise with a personalized approach to help clients navigate complex legal challenges across Nepal.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With years of experience and a commitment to excellence, we provide strategic counsel and dedicated representation to individuals and businesses alike. Our foundation is built on trust, integrity, and unwavering advocacy for our clients.
            </p>
            <Button asChild className="bg-law-navy hover:bg-opacity-90 text-white rounded">
              <Link to="/about">About Smriti Gajurel</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-law-gold rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
                alt="Gajurel Law Firm" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
