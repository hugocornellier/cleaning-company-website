import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Regular House Cleaning",
    description: "Weekly, bi-weekly, or monthly cleaning to keep your home consistently spotless.",
    features: ["Dusting & vacuuming", "Kitchen & bathroom deep clean", "Floor mopping", "Trash removal"],
    icon: "🏠"
  },
  {
    title: "Deep Cleaning",
    description: "Comprehensive top-to-bottom cleaning for move-ins, move-outs, or spring cleaning.",
    features: ["Inside appliances", "Cabinet interiors", "Baseboards & windowsills", "Light fixtures"],
    icon: "✨"
  },
  {
    title: "Office Cleaning",
    description: "Professional commercial cleaning services to maintain a productive workspace.",
    features: ["Desk sanitization", "Common area cleaning", "Restroom maintenance", "Flexible scheduling"],
    icon: "🏢"
  },
  {
    title: "Post-Construction Cleanup",
    description: "Specialized cleaning after renovations or construction work.",
    features: ["Dust removal", "Paint & debris cleanup", "Window cleaning", "Final touch-ups"],
    icon: "🔨"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gradient-service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From regular maintenance to deep cleans, we have the perfect service for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="text-left space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="service" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};