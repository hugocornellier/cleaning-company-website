const features = [
  {
    title: "Fully Insured & Bonded",
    description: "Your home and belongings are protected with comprehensive insurance coverage.",
    icon: "🛡️"
  },
  {
    title: "Eco-Friendly Products",
    description: "Safe, green cleaning products that are gentle on your family and pets.",
    icon: "🌿"
  },
  {
    title: "Flexible Scheduling",
    description: "Book cleanings that fit your busy schedule, including weekends and evenings.",
    icon: "📅"
  },
  {
    title: "Satisfaction Guarantee",
    description: "Not happy? We'll come back within 24 hours to make it right, free of charge.",
    icon: "⭐"
  },
  {
    title: "Background Checked Staff",
    description: "All our cleaning professionals are thoroughly screened for your peace of mind.",
    icon: "✅"
  },
  {
    title: "Competitive Pricing",
    description: "Transparent, fair pricing with no hidden fees. Get a free quote today!",
    icon: "💰"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Busy Bee Cleaning?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another cleaning service - we're your trusted partners in maintaining a beautiful home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};