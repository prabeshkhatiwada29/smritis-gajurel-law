
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-law-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-lg mb-8">
            Our team is ready to provide expert legal guidance tailored to your specific situation. 
            Schedule a consultation today to discuss your case.
          </p>
          <Button asChild className="bg-law-gold hover:bg-opacity-90 text-law-navy font-semibold px-8 py-3 rounded text-lg">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
