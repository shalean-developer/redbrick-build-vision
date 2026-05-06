import Link from "next/link";
import { ServiceAreaLinks } from "@/components/marketing/ServiceAreaLinks";
import { HomeProofSection } from "@/components/marketing/HomeProofSection";
import { HomeCoreServiceShortcuts } from "@/components/marketing/HomeCoreServiceShortcuts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import ProjectCard from "@/components/ProjectCard";
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
    {
      title: "Construction",
      description:
        "Complete building solutions from foundation to finish for residential and commercial projects.",
      icon: Construction,
      image: assets.serviceConstruction,
    },
    {
      title: "Tiling",
      description:
        "Expert tile installation for floors, walls, and outdoor spaces with precision and quality.",
      icon: Grid3x3,
      image: assets.serviceTiling,
    },
    {
      title: "Painting",
      description:
        "Professional painting services for interior and exterior applications with premium quality finishes.",
      icon: PaintBucket,
      image: assets.servicePainting,
    },
    {
      title: "Decking & Flooring",
      description:
        "Beautiful and durable deck installations and flooring solutions for indoor and outdoor spaces.",
      icon: Home,
      image: assets.serviceDecking,
    },
    {
      title: "Paving",
      description: "Professional paving services for driveways, walkways, and outdoor areas.",
      icon: Wrench,
      image: assets.servicePaving,
    },
    {
      title: "Waterproofing",
      description:
        "Comprehensive waterproofing solutions to protect your property from water damage.",
      icon: Droplets,
      image: assets.serviceWaterproofing,
    },
    {
      title: "Renovations",
      description: "Transform your space with expert renovation services tailored to your vision.",
      icon: PaintBucket,
      image: assets.serviceRenovations,
    },
    {
      title: "Plumbing",
      description:
        "Professional plumbing services for installations, repairs, and maintenance of water systems.",
      icon: Pipette,
      image: assets.servicePlumbing,
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

      <Hero
        title="Construction & Tiling Services in Cape Town & Surrounding Areas"
        lead="Reliable contractors across the Cape Town metro, from Sea Point and Camps Bay to Claremont, Bellville, Milnerton, and Table View. Renovations, tiling, waterproofing, paving, and more, with programmes you can plan around and quotes with assumptions spelled out."
        trustLine="Western Cape focus · Quote turnaround prioritised when scope and site access are clear"
        primaryCtaLabel="Get a Quote in 24 Hours"
        whatsappCtaLabel="WhatsApp Us"
        showCTA
        showProjectsLink
        locationHubLink={{ href: "/locations/cape-town", label: "Construction services in Cape Town" }}
      />

      <HomeProofSection />

      <ServiceAreaLinks />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Building with Purpose and Pride</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Team Edlick Construction is a leading contractor operating across five provinces in South Africa. We
              specialize in infrastructure development and housing construction, delivering projects that shape
              communities and create lasting value. Explore{" "}
              <Link href="/services/tiling/cape-town" className="text-primary font-medium hover:underline">
                tiling services in Cape Town
              </Link>
              ,{" "}
              <Link href="/services/renovations/cape-town" className="text-primary font-medium hover:underline">
                home renovations in Cape Town
              </Link>
              , or{" "}
              <Link href="/services/construction/cape-town" className="text-primary font-medium hover:underline">
                construction services in Cape Town
              </Link>
              , then{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                request a quote
              </Link>{" "}
              with your site details and scope.
            </p>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions delivered with expertise and dedication
            </p>
          </div>

          <HomeCoreServiceShortcuts />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Team Edlick</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our values drive everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent scopes across the Cape Town metro and Western Cape, representative categories only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ProjectCard
              title="Residential Development"
              location="Northern suburbs, Cape Town"
              date="Dec 2024"
              image={assets.projectResidential}
              category="Housing"
            />
            <ProjectCard
              title="Commercial Complex"
              location="Atlantic Seaboard"
              date="Nov 2024"
              image={assets.projectCommercial}
              category="Infrastructure"
            />
            <ProjectCard
              title="Home Renovation"
              location="Southern suburbs, Cape Town"
              date="Oct 2024"
              image={assets.projectRenovation}
              category="Renovations"
            />
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Get a quote within 24 hours</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Tell us about your project, site location, and timeline, we respond with a structured estimate, programme
            options, and clear next steps.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
