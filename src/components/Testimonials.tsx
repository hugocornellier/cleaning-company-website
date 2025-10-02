import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "Busy Bee Cleaning transformed my home! The team is professional, thorough, and always goes above and beyond. I can't imagine life without them."
  },
  {
    name: "Mike Chen",
    location: "Suburbs",
    rating: 5,
    text: "After trying several cleaning services, Busy Bee is by far the best. They're reliable, trustworthy, and my house has never looked better."
  },
  {
    name: "Emily Rodriguez",
    location: "Midtown",
    rating: 5,
    text: "The attention to detail is incredible. They clean areas I didn't even know needed cleaning! Highly recommend to anyone looking for quality service."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - here's what our happy customers think
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};