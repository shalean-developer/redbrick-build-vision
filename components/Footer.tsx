import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { TeamEdlickLogo } from "@/components/brand/TeamEdlickLogo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-primary bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="Team Edlick PVT Ltd — home"
              className="inline-block mb-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <TeamEdlickLogo sizeClass="h-14 w-14 sm:h-16 sm:w-16" />
            </Link>
            <p className="text-sm mb-4 opacity-90 leading-relaxed">
              Building South Africa&apos;s Future with Integrity and Innovation.
            </p>
            <p className="text-xs opacity-75">
              © {year} Team Edlick Construction. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-95 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-95 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-95 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="opacity-95 hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/locations/cape-town" className="opacity-95 hover:text-primary transition-colors">
                  Cape Town
                </Link>
              </li>
              <li>
                <Link href="/projects" className="opacity-95 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-95 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="opacity-95 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden />
                <div className="space-y-1">
                  <p>
                    <span className="opacity-90">Sam: </span>
                    <a href="tel:+27685943091" className="hover:text-primary transition-colors underline-offset-2 hover:underline">
                      +27 68 594 3091
                    </a>
                  </p>
                  <p>
                    <span className="opacity-90">Bishop: </span>
                    <a href="tel:+27827587466" className="hover:text-primary transition-colors underline-offset-2 hover:underline">
                      +27 82 758 7466
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" aria-hidden />
                <p className="opacity-95 leading-relaxed">
                  The Watershed, D03 Dock Road
                  <br />
                  Waterfront, South Africa
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm opacity-80">
          <p>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
