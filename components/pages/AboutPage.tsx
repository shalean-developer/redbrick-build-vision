import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ValueCard from "@/components/ValueCard";
import { Shield, Award, Target, Lightbulb, Users, TrendingUp, CheckCircle } from "lucide-react";
import { assets } from "@/lib/assets";

export default function AboutPage() {
  const values = [
    {
      title: "Safety",
      description: "We prioritize the safety of our team, clients, and communities in every project we undertake.",
      icon: Shield,
    },
    {
      title: "Excellence",
      description: "Committed to delivering superior quality and exceeding expectations in all our work.",
      icon: Award,
    },
    {
      title: "Integrity",
      description: "Building trust through honest communication, transparency, and ethical business practices.",
      icon: Target,
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and methods to continuously improve our services and efficiency.",
      icon: Lightbulb,
    },
    {
      title: "Accountability",
      description: "Taking full responsibility for our commitments and delivering on our promises.",
      icon: Users,
    },
    {
      title: "Potential",
      description: "Investing in our people's growth and unlocking their full potential through development.",
      icon: TrendingUp,
    },
    {
      title: "Results",
      description: "Focused on achieving measurable outcomes and creating lasting value for our clients.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero title="About Team Edlick" subtitle="Building South Africa's Future with Expertise and Dedication" height="medium" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Team Edlick Construction is a Cape Town contractor focused on coordinated residential and commercial
                construction, renovations, tiling, waterproofing, paving, painting, decking, flooring, and plumbing.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our approach is built around skilled trades, clear scope definition, practical sequencing, site safety,
                and transparent communication from quotation through handover.
              </p>
              <p className="text-lg text-muted-foreground">
                We work to create durable spaces that serve the people who live, work, and operate in them.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-elevated">
              <Image
                src={assets.aboutTeam}
                alt="Team Edlick painters and renovators finishing interiors on a Cape Town residential project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted border-y border-border/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="mb-3">On site across Cape Town</h2>
            <p className="text-lg text-muted-foreground">
              Coordinated trades, protection of finishes, and practical site management for residential and commercial programmes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { src: assets.aboutOnSite1, alt: "Exterior painting and coatings work on a Cape Town building" },
              { src: assets.aboutOnSite2, alt: "Renovation and structural finishes programme with coordinated trades" },
              { src: assets.aboutOnSite3, alt: "Construction team at work on a Cape Town metro building shell" },
            ].map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-background shadow-card"
              >
                <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-lg shadow-card">
              <div className="text-primary text-4xl font-bold mb-4">Vision</div>
              <p className="text-lg">
                To be the preferred contractor our customers want to work with and our employees are proud to work for.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-card">
              <div className="text-primary text-4xl font-bold mb-4">Mission</div>
              <p className="text-lg">
                To deliver high-quality, cost-effective projects through a motivated and skilled team, consistently
                exceeding client expectations while maintaining the highest standards of safety and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide our decisions, actions, and relationships every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
