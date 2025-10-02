import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free quote and experience the Busy Bee difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  📞 <span>Call Us Today</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">(555) 123-BUSY</p>
                <p className="text-muted-foreground">Available Mon-Sat, 7am-6pm</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  📧 <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-primary">hello@busybeecleaning.com</p>
                <p className="text-muted-foreground">We respond within 2 hours</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  📍 <span>Service Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Downtown & Metro Area</li>
                  <li>• Suburban Communities</li>
                  <li>• Office Buildings</li>
                  <li>• Residential Complexes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-hero rounded-2xl p-8 text-center text-primary-foreground shadow-glow">
              <h3 className="text-2xl font-bold mb-4">
                Get Your Free Quote Now!
              </h3>
              <p className="mb-6 opacity-90">
                No commitment required. See how affordable professional cleaning can be.
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Our Pricing
                </Button>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                🐝 Join hundreds of satisfied customers who trust Busy Bee Cleaning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};