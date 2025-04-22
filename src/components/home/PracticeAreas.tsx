
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Corporate Law",
      description: "Expert legal guidance for businesses of all sizes, from startups to established corporations.",
      icon: "⚖️",
    },
    {
      title: "Family Law",
      description: "Compassionate representation for divorce, child custody, and other family legal matters.",
      icon: "👪",
    },
    {
      title: "Property Law",
      description: "Navigating complex property transactions, disputes, and real estate matters.",
      icon: "🏠",
    },
    {
      title: "Civil Litigation",
      description: "Strategic representation in resolving disputes through negotiation or court proceedings.",
      icon: "📝",
    },
    {
      title: "Criminal Defense",
      description: "Vigorous defense for individuals facing criminal charges with a focus on protecting rights.",
      icon: "🛡️",
    },
    {
      title: "Immigration Law",
      description: "Assistance with visas, residency applications, and navigating complex immigration procedures.",
      icon: "✈️",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-law-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">Our Practice Areas</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive legal services across a wide range of areas, providing expert counsel and representation tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="border border-gray-200 hover:border-law-gold hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="text-3xl mb-2">{area.icon}</div>
                <CardTitle className="text-xl text-law-navy">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">{area.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
