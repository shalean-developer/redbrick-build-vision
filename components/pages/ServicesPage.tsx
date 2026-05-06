import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { constructionServices } from "@/lib/construction-services";
import {
  Construction,
  Grid3x3,
  Home,
  Wrench,
  Droplets,
  PaintBucket,
  Pipette,
} from "lucide-react";
import { assets } from "@/lib/assets";

export default function ServicesPage() {
  const services = [
    {
      title: "Construction",
      description:
        "Comprehensive construction services for residential and commercial projects. From initial planning to final execution, we manage every aspect of the building process with precision and expertise.",
      icon: Construction,
      image: assets.serviceConstruction,
    },
    {
      title: "Tiling",
      description:
        "Professional tile installation for all surfaces including floors, walls, kitchens, bathrooms, and outdoor areas. We work with ceramic, porcelain, natural stone, and specialty tiles.",
      icon: Grid3x3,
      image: assets.serviceTiling,
    },
    {
      title: "Painting",
      description:
        "Professional painting services for interior and exterior applications. From residential homes to commercial buildings, we deliver flawless finishes with premium quality paints and expert techniques.",
      icon: PaintBucket,
      image: assets.servicePainting,
    },
    {
      title: "Decking & Flooring",
      description:
        "Beautiful and durable decking installations for outdoor living spaces, along with premium flooring solutions for interior applications. We use high-quality materials built to last.",
      icon: Home,
      image: assets.serviceDecking,
    },
    {
      title: "Paving",
      description:
        "Professional paving services for driveways, walkways, patios, and outdoor areas. We offer various materials and patterns to enhance your property's curb appeal and functionality.",
      icon: Wrench,
      image: assets.servicePaving,
    },
    {
      title: "Waterproofing",
      description:
        "Comprehensive waterproofing solutions to protect your property from water damage. We specialize in basement waterproofing, roof sealing, and moisture barrier installation.",
      icon: Droplets,
      image: assets.serviceWaterproofing,
    },
    {
      title: "Renovations",
      description:
        "Complete renovation services to transform your existing space. Whether it's a single room makeover or a whole-house renovation, we bring your vision to life with quality craftsmanship.",
      icon: PaintBucket,
      image: assets.serviceRenovations,
    },
    {
      title: "Plumbing",
      description:
        "Expert plumbing services for new installations, repairs, and maintenance. From pipe installations and drainage systems to fixture replacements and leak detection, we handle all your plumbing needs.",
      icon: Pipette,
      image: assets.servicePlumbing,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero
        title="Our Services"
        subtitle="Comprehensive Construction Solutions Tailored to Your Needs"
        height="medium"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground">
              At Team Edlick Construction, we offer a full spectrum of construction services across South Africa. Our
              experienced team delivers quality workmanship, innovative solutions, and exceptional service on every
              project, no matter the size or complexity.
            </p>
            <p className="text-sm text-muted-foreground mt-6">
              Need city-targeted SEO pages? Open each trade hub, then jump to Cape Town, example:{" "}
              <Link href="/services/tiling/cape-town" className="text-primary hover:underline">
                tiling in Cape Town
              </Link>
              .
            </p>
            <nav className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="Service hubs">
              {constructionServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm font-medium text-primary hover:underline">
                  {s.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Choose Team Edlick</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-bold mb-3 text-primary">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every project undergoes rigorous quality checks to ensure we meet and exceed industry standards and
                  client expectations.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-bold mb-3 text-primary">Skilled Professionals</h3>
                <p className="text-muted-foreground">
                  Our team consists of experienced craftsmen and certified professionals who bring expertise and
                  attention to detail to every job.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-bold mb-3 text-primary">Cost-Effective Solutions</h3>
                <p className="text-muted-foreground">
                  We provide competitive pricing without compromising on quality, ensuring maximum value for your
                  investment.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-bold mb-3 text-primary">Timely Delivery</h3>
                <p className="text-muted-foreground">
                  We understand the importance of deadlines and work efficiently to complete projects on time and within
                  budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
