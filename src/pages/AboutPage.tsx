import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return <>
      <div className="bg-law-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Smriti Gajurel</h1>
          <p className="text-lg max-w-3xl">Founder and Principal Attorney at Gajurel Law Firm</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-law-gold rounded-lg"></div>
                <img alt="Smriti Gajurel" className="w-full h-auto rounded-lg shadow-lg relative z-10" src="/lovable-uploads/90495c90-defd-41c1-b1d6-2b847f2eb5e0.png" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-law-navy mb-6">My Background</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over [X] years of experience in legal practice, I have dedicated my career to providing exceptional legal representation to clients across Nepal. My journey in law began at [University Name], where I earned my law degree with honors.
                </p>
                <p>
                  Throughout my career, I have developed expertise in various areas of law, with a particular focus on [specific practice areas]. My commitment to continuous learning and staying updated with the latest legal developments ensures that my clients receive the most current and effective legal strategies.
                </p>
                <p>
                  Before founding Gajurel Law Firm, I gained valuable experience working at [previous professional experience]. This diverse background has equipped me with a comprehensive understanding of legal challenges from multiple perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-law-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-law-navy mb-8 text-center">Professional Experience & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-law-navy mb-4">Education & Qualifications</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <div className="font-semibold">Law Degree</div>
                  <div>University Name, Year</div>
                </li>
                <li>
                  <div className="font-semibold">Bar Association Membership</div>
                  <div>Nepal Bar Association, Year</div>
                </li>
                <li>
                  <div className="font-semibold">Additional Certifications</div>
                  <div>Specialized training in relevant legal areas</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-law-navy mb-4">Areas of Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Corporate and Business Law</li>
                <li>• Civil Litigation</li>
                <li>• Family Law</li>
                <li>• Property Law</li>
                <li>• Criminal Defense</li>
                <li>• Immigration Law</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-law-navy mb-6">My Approach to Legal Practice</h2>
            <p className="text-gray-700 mb-8">
              I believe that effective legal representation goes beyond just knowing the law. It requires a deep understanding of each client's unique situation, goals, and concerns. My approach combines thorough legal knowledge with a personalized strategy tailored to each client's specific needs.
            </p>
            <p className="text-gray-700 mb-8">
              At Gajurel Law Firm, we prioritize clear communication, transparency, and client involvement throughout the legal process. I am committed to not only resolving your immediate legal issues but also providing you with the knowledge and resources to make informed decisions for the future.
            </p>
            <Button asChild className="bg-law-navy hover:bg-opacity-90 text-white rounded">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default AboutPage;