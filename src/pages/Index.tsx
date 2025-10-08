import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  Hammer,
  Grid3x3,
  Wrench,
  Home,
  Construction,
  Droplets,
  PaintBucket,
  Shield,
  Award,
  Target,
  Lightbulb,
  Users,
} from "lucide-react";
import tilingImage from "@/assets/service-tiling.jpg";
import carpentryImage from "@/assets/service-carpentry.jpg";
import deckingImage from "@/assets/service-decking.jpg";
import housingImage from "@/assets/project-housing.jpg";

const Index = () => {
  const services = [
    {
      title: "Construction",
      description: "Complete building solutions from foundation to finish for residential and commercial projects.",
      icon: Construction,
    },
    {
      title: "Tiling",
      description: "Expert tile installation for floors, walls, and outdoor spaces with precision and quality.",
      icon: Grid3x3,
      image: tilingImage,
    },
    {
      title: "Carpentry",
      description: "Custom woodwork, structural carpentry, and finishing for all your construction needs.",
      icon: Hammer,
      image: carpentryImage,
    },
    {
      title: "Decking & Flooring",
      description: "Beautiful and durable deck installations and flooring solutions for indoor and outdoor spaces.",
      icon: Home,
      image: deckingImage,
    },
    {
      title: "Paving",
      description: "Professional paving services for driveways, walkways, and outdoor areas.",
      icon: Wrench,
    },
    {
      title: "Waterproofing",
      description: "Comprehensive waterproofing solutions to protect your property from water damage.",
      icon: Droplets,
    },
    {
      title: "Renovations",
      description: "Transform your space with expert renovation services tailored to your vision.",
      icon: PaintBucket,
    },
  ];

  const values = [
    {
      title: "Safety",
      description: "Prioritizing safety in every project and protecting our team and clients.",
      icon: Shield,
    },
    {
      title: "Excellence",
      description: "Delivering superior quality and exceeding expectations consistently.",
      icon: Award,
    },
    {
      title: "Integrity",
      description: "Building trust through honest communication and ethical practices.",
      icon: Target,
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and methods to improve our services.",
      icon: Lightbulb,
    },
    {
      title: "Accountability",
      description: "Taking responsibility for our commitments and delivering results.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Creating Reality"
        subtitle="Building South Africa's Future with Integrity and Innovation"
        showCTA
      />

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Building with Purpose and Pride</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Team Edlick Construction is a leading contractor operating across five provinces in South Africa. 
              We specialize in infrastructure development and housing construction, delivering projects that 
              shape communities and create lasting value.
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions delivered with expertise and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Team Edlick</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our commitment to excellence across South Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ProjectCard
              title="Residential Development"
              location="Gauteng"
              date="Dec 2024"
              image={housingImage}
              category="Housing"
            />
            <ProjectCard
              title="Commercial Complex"
              location="Western Cape"
              date="Nov 2024"
              image={housingImage}
              category="Infrastructure"
            />
            <ProjectCard
              title="Home Renovation"
              location="KwaZulu-Natal"
              date="Oct 2024"
              image={housingImage}
              category="Renovations"
            />
          </div>
          
          <div className="text-center">
            <Link to="/projects">
              <Button size="lg">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
