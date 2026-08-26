import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/assets";
import { whatsappQuoteUrl } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

interface HeroProps {
  title: string;
  /** Value proposition, shown directly under the H1 */
  lead?: string;
  subtitle?: string;
  trustLine?: string;
  showCTA?: boolean;
  primaryCtaLabel?: string;
  whatsappCtaLabel?: string;
  /** Preserves internal link to the projects index */
  showProjectsLink?: boolean;
  /** Local SEO hub link (e.g. Cape Town location page) */
  locationHubLink?: { href: string; label: string };
  height?: "full" | "medium" | "small";
}

const Hero = ({
  title,
  lead,
  subtitle,
  trustLine,
  showCTA = false,
  primaryCtaLabel = "Request a Quote",
  whatsappCtaLabel = "WhatsApp",
  showProjectsLink = false,
  locationHubLink,
  height = "full",
}: HeroProps) => {
  const heightClasses = {
    full: "min-h-screen",
    medium: "min-h-[60vh]",
    small: "min-h-[40vh]",
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      <Image
        src={assets.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center text-white">
        <h1 className="mb-5 md:mb-6 text-balance">{title}</h1>

        {lead ? (
          <p className="text-base md:text-lg mb-4 max-w-2xl mx-auto opacity-[0.96] leading-relaxed animate-fade-in text-pretty">
            {lead}
          </p>
        ) : null}

        {subtitle ? (
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95 animate-fade-in text-pretty">
            {subtitle}
          </p>
        ) : null}

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-slide-in-up max-w-lg mx-auto sm:max-w-none">
            <Link href="/contact" className="sm:flex-initial sm:min-w-[200px]">
              <Button size="lg" className="text-lg w-full">
                {primaryCtaLabel}
              </Button>
            </Link>
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:flex-initial sm:min-w-[200px]"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg w-full bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary gap-2"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                {whatsappCtaLabel}
              </Button>
            </a>
          </div>
        )}

        {trustLine ? (
          <p className="mt-8 text-sm md:text-base text-white/85 max-w-xl mx-auto">{trustLine}</p>
        ) : null}

        {(showProjectsLink || locationHubLink) ? (
          <p className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center text-sm">
            {showProjectsLink ? (
              <Link
                href="/projects"
                className="font-medium text-white/90 underline underline-offset-4 hover:text-white transition-colors"
              >
                Browse completed projects
              </Link>
            ) : null}
            {locationHubLink ? (
              <Link
                href={locationHubLink.href}
                className="font-medium text-white/90 underline underline-offset-4 hover:text-white transition-colors"
              >
                {locationHubLink.label}
              </Link>
            ) : null}
          </p>
        ) : null}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
