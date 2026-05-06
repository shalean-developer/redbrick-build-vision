"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TeamEdlickLogo } from "@/components/brand/TeamEdlickLogo";
import { whatsappQuoteUrl } from "@/lib/contact";
import { locationPages } from "@/lib/locations";
import { cn } from "@/lib/utils";

const SERVICE_SHORTCUTS = [
  { href: "/services/tiling", label: "Tiling services" },
  { href: "/services/renovations", label: "Renovations" },
  { href: "/services/paving", label: "Paving services" },
] as const;

/** Exact paths where the first viewport uses the full-width photo Hero + red gradient (transparent bar + light links). */
const PHOTO_HERO_PATHS = new Set([
  "/",
  "/about",
  "/contact",
  "/services",
  "/projects",
  "/careers",
]);

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const overPhotoHero = PHOTO_HERO_PATHS.has(pathname);
  /** Solid bar + dark chrome when scrolled, or on pages with a light band under the nav (blog, money pages, legal, etc.). */
  const solidHeader = isScrolled || !overPhotoHero;

  const match = (path: string, prefix?: boolean) =>
    prefix ? pathname === path || pathname.startsWith(`${path}/`) : pathname === path;

  const linkRing =
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const navLinkClass = (active: boolean) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      linkRing,
      active && solidHeader && "bg-primary/10 text-primary",
      active && !solidHeader && "bg-white/15 text-white",
      !active && solidHeader && "text-foreground hover:bg-muted hover:text-primary",
      !active && !solidHeader && "text-white/95 hover:bg-white/10 hover:text-white",
    );

  const dropdownTriggerClass = (sectionActive: boolean) =>
    cn(
      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors data-[state=open]:bg-transparent",
      linkRing,
      sectionActive && solidHeader && "bg-primary/10 text-primary",
      sectionActive && !solidHeader && "bg-white/15 text-white",
      !sectionActive && solidHeader && "text-foreground hover:bg-muted hover:text-primary",
      !sectionActive && !solidHeader && "text-white/95 hover:bg-white/10 hover:text-white",
    );

  const servicesSectionActive = match("/services", true);
  const locationsSectionActive = match("/locations", true);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        solidHeader ? "border-b border-border/60 bg-background/95 shadow-md backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-[4.5rem] lg:h-20 items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            className={cn("flex shrink-0 items-center rounded-sm", linkRing)}
            aria-label="Team Edlick Construction home"
          >
            <TeamEdlickLogo priority />
          </Link>

          {/* Desktop center nav */}
          <nav
            className="hidden lg:flex flex-1 items-center justify-center gap-1 px-4"
            aria-label="Primary"
          >
            <Link href="/" className={navLinkClass(match("/"))} aria-current={match("/") ? "page" : undefined}>
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={dropdownTriggerClass(servicesSectionActive)}>
                Services
                <ChevronDown className="h-4 w-4 opacity-80" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-60">
                <DropdownMenuLabel className="font-normal text-muted-foreground">
                  Construction services
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer font-medium">
                  <Link href="/services">All construction services</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {SERVICE_SHORTCUTS.map((s) => (
                  <DropdownMenuItem key={s.href} asChild className="cursor-pointer">
                    <Link href={s.href}>{s.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={dropdownTriggerClass(locationsSectionActive)}>
                Locations
                <ChevronDown className="h-4 w-4 opacity-80" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuLabel className="font-normal text-muted-foreground">Where we build</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer font-medium">
                  <Link href="/locations">All locations</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {locationPages.map((loc) => (
                  <DropdownMenuItem key={loc.city} asChild className="cursor-pointer">
                    <Link href={`/locations/${loc.city}`}>{loc.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/projects"
              className={navLinkClass(match("/projects"))}
              aria-current={match("/projects") ? "page" : undefined}
            >
              Projects
            </Link>
            <Link href="/about" className={navLinkClass(match("/about"))} aria-current={match("/about") ? "page" : undefined}>
              About
            </Link>
            <Link
              href="/contact"
              className={navLinkClass(match("/contact"))}
              aria-current={match("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
            <Link
              href="/careers"
              className={navLinkClass(match("/careers"))}
              aria-current={match("/careers") ? "page" : undefined}
            >
              Careers
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" className="gap-1.5 font-semibold" asChild>
              <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
            </Button>
            <Button size="sm" className="font-semibold shadow-sm" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile / tablet: compact CTAs + menu */}
          <div className="flex lg:hidden items-center gap-2">
            <Button size="sm" className="inline-flex max-[380px]:hidden font-semibold px-3 sm:px-4" asChild>
              <Link href="/contact">Quote</Link>
            </Button>
            <Button variant="outline" size="icon" className="shrink-0 border-muted-foreground/30" asChild>
              <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Team Edlick">
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "shrink-0 hover:bg-transparent",
                    solidHeader ? "text-foreground hover:text-primary" : "text-white hover:text-white hover:bg-white/10",
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[min(100vw,20rem)] flex-col gap-0 border-l p-0 sm:max-w-sm z-[60]">
                <SheetHeader className="border-b px-6 py-5 text-left">
                  <SheetTitle className="text-left">Menu</SheetTitle>
                  <SheetDescription className="text-left text-base text-muted-foreground">
                    Construction, tiling, and renovations across Cape Town and surrounding suburbs.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <ul className="flex flex-col gap-1">
                    <li>
                      <Link
                        href="/"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          linkRing,
                          match("/") ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          linkRing,
                          servicesSectionActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="pl-3 border-l border-border ml-3 space-y-0.5 py-1">
                      {SERVICE_SHORTCUTS.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block rounded-md py-2 pr-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </li>
                    <li>
                      <Link
                        href="/locations"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          linkRing,
                          locationsSectionActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        Locations
                      </Link>
                    </li>
                    <li className="pl-3 border-l border-border ml-3 space-y-0.5 py-1">
                      {locationPages.map((loc) => (
                        <Link
                          key={loc.city}
                          href={`/locations/${loc.city}`}
                          className="block rounded-md py-2 pr-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          linkRing,
                          match("/projects") ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          linkRing,
                          match("/about") ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          linkRing,
                          match("/contact") ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          linkRing,
                          match("/careers") ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border-t bg-muted/40 px-4 py-4 space-y-2">
                  <Button className="w-full font-semibold" asChild>
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                  <Button variant="outline" className="w-full font-semibold gap-2" asChild>
                    <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      WhatsApp us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
