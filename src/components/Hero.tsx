import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Busy Bee Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Professional house cleaning services that make your home sparkle. 
            Reliable, thorough, and trusted by families across the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Book Your Cleaning
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Bee Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce">🐝</div>
      <div className="absolute bottom-32 right-16 text-4xl animate-pulse">🐝</div>
    </section>
  );
};