import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import { ServiceAreaLinks } from "@/components/marketing/ServiceAreaLinks";
import { HomeProofSection } from "@/components/marketing/HomeProofSection";
import { HomeCoreServiceShortcuts } from "@/components/marketing/HomeCoreServiceShortcuts";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/assets";
import {
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
  Pipette,
} from "lucide-react";

export default function HomePage() {
  const services = [
    { title: "Construction", description: "Building and alteration scopes for residential and commercial properties.", icon: Construction, image: assets.serviceConstruction },
    { title: "Tiling", description: "Floor, wall and wet-area tiling with substrate preparation and finishing.", icon: Grid3x3, image: assets.serviceTiling },
    { title: "Painting", description: "Interior and exterior preparation, painting and coating work.", icon: PaintBucket, image: assets.servicePainting },
    { title: "Decking & Flooring", description: "Indoor flooring and outdoor decking installation and upgrades.", icon: Home, image: assets.serviceDecking },
    { title: "Paving", description: "Driveways, walkways and outdoor paved areas with appropriate base preparation.", icon: Wrench, image: assets.servicePaving },
    { title: "Waterproofing", description: "Wet-area, balcony and roof waterproofing assessment and repair scopes.", icon: Droplets, image: assets.serviceWaterproofing },
    { title: "Renovations", description: "Coordinated renovation work across finishes, services and building trades.", icon: PaintBucket, image: assets.serviceRenovations },
    { title: "Plumbing", description: "Plumbing installation, repair and maintenance work as part of building scopes.", icon: Pipette, image: assets.servicePlumbing },
  ];

  const values = [
    { title: "Safety", description: "Plan work to protect clients, teams and occupied spaces.", icon: Shield },
    { title: "Quality", description: "Use clear scope, preparation and inspection points before handover.", icon: Award },
    { title: "Transparency", description: "Set out assumptions, exclusions and variations in writing.", icon: Target },
    { title: "Practical planning", description: "Sequence trades and materials around realistic site conditions.", icon: Lightbulb },
    { title: "Accountability", description: "Keep responsibility and next steps clear throughout the job.", icon: Users },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero
        title="Construction & Tiling Services in Cape Town & Surrounding Areas"
        lead="Construction, renovations, tiling, waterproofing, paving and related building services across the Cape Town metro. Share your site details, scope and timing for a structured quote."
        trustLine="Cape Town focus · Clear scope, assumptions and next steps"
        primaryCtaLabel="Request a Quote"
        whatsappCtaLabel="WhatsApp Us"
        showCTA
        locationHubLink={{ href: "/locations/cape-town", label: "Construction services in Cape Town" }}
      />

      <HomeProofSection />
      <ServiceAreaLinks />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Building work with clearer scope and coordination</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Team Edlick Construction coordinates residential and commercial building scopes across Cape Town. Explore
              tiling, renovations, waterproofing and other services, then request a quote with your site details and
              required outcome.
            </p>
            <Link href="/about">
              <Button size="lg" variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose a service to review scope information and request a site-specific quote.</p>
          </div>
          <HomeCoreServiceShortcuts />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">How we approach the work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Practical principles for quoting, coordination and handover.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => <ValueCard key={value.title} {...value} />)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Request a site-specific quote</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Send the project location, required work, photos where available, and your preferred timing.</p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">Request a Quote</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
