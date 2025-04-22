
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PracticeAreasPage = () => {
  const practiceAreas = [
    {
      title: "Corporate Law",
      description: "Our corporate law practice provides comprehensive legal services to businesses of all sizes. We assist with entity formation, corporate governance, mergers and acquisitions, contract drafting and review, regulatory compliance, and business dispute resolution. Our goal is to protect your business interests while facilitating growth and success.",
      icon: "⚖️",
    },
    {
      title: "Family Law",
      description: "We handle a wide range of family law matters with sensitivity and care. Our services include divorce proceedings, child custody and support arrangements, alimony negotiations, adoption processes, and domestic violence protection. We strive to minimize conflict while protecting your rights and the welfare of children involved.",
      icon: "👪",
    },
    {
      title: "Property Law",
      description: "Our property law practice covers all aspects of real estate and property matters. We assist with property transactions, title investigations, landlord-tenant issues, property disputes, easements and boundary issues, and construction law matters. Our team ensures your property rights are protected throughout any transaction or dispute.",
      icon: "🏠",
    },
    {
      title: "Civil Litigation",
      description: "When disputes arise, our litigation team provides strategic representation at all stages of the process. We handle contract disputes, property conflicts, personal injury claims, professional negligence cases, and general civil litigation. Our approach focuses on efficient resolution while thoroughly protecting your interests.",
      icon: "📝",
    },
    {
      title: "Criminal Defense",
      description: "Our criminal defense practice provides vigorous representation for individuals facing criminal charges. We handle cases ranging from minor offenses to serious crimes, ensuring your rights are protected throughout the criminal justice process. Our defense strategies are thorough, strategic, and focused on achieving the best possible outcome.",
      icon: "🛡️",
    },
    {
      title: "Immigration Law",
      description: "Navigating immigration procedures can be challenging. Our immigration law services include visa applications, residency permits, citizenship applications, deportation defense, and family-based immigration. We stay current with changing immigration policies to provide you with the most effective guidance.",
      icon: "✈️",
    },
    {
      title: "Employment Law",
      description: "Our employment law practice represents both employers and employees in workplace matters. We assist with employment contracts, workplace policies, discrimination and harassment claims, wrongful termination cases, and labor disputes. Our goal is to ensure fair treatment and compliance with employment regulations.",
      icon: "💼",
    },
    {
      title: "Intellectual Property",
      description: "Protecting your creative and business assets is essential in today's economy. We provide comprehensive IP services including trademark registration, copyright protection, patent guidance, IP licensing agreements, and infringement disputes. Our team helps you establish, maintain, and defend your intellectual property rights.",
      icon: "💡",
    },
  ];

  return (
    <>
      <div className="bg-law-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Areas</h1>
          <p className="text-lg max-w-3xl">Comprehensive legal services tailored to your specific needs</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-law-navy mb-4">Our Legal Expertise</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Gajurel Law Firm, we offer a wide range of legal services designed to address diverse client needs. Our experienced team provides personalized representation across the following practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="border border-gray-200 hover:border-law-gold hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-2">{area.icon}</span>
                    <CardTitle className="text-2xl text-law-navy">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-law-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-law-navy mb-6">Need Legal Assistance?</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Every legal matter is unique and requires a tailored approach. Contact us today to discuss your specific needs and how our expertise can help you achieve the best possible outcome.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-law-navy hover:bg-opacity-90 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default PracticeAreasPage;
