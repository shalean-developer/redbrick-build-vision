import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero
        title="Team Edlick Projects"
        subtitle="Verified project case studies will be published here with real scope, location and project imagery."
        height="medium"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl border bg-background p-8 md:p-12 text-center shadow-card">
            <h2 className="mb-4">Project evidence is being verified</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We have temporarily unpublished generic project cards, dates and business statistics that did not have a
              traceable evidence record in the website repository. New case studies will be added only when the project
              scope, location, imagery and publication permission can be verified.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild>
                <Link href="/services">Explore our services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Request a quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
