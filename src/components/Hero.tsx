import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  height?: "full" | "medium" | "small";
}

const Hero = ({ title, subtitle, showCTA = false, height = "full" }: HeroProps) => {
  const heightClasses = {
    full: "min-h-screen",
    medium: "min-h-[60vh]",
    small: "min-h-[40vh]",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="mb-6 animate-slide-in-up">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-fade-in">
          {subtitle}
        </p>

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up">
            <Link to="/projects">
              <Button size="lg" className="text-lg">
                Our Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                Request a Quote
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
