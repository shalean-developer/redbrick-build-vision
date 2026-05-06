/** Public URLs under `/public/assets`. Raster photos live in-repo; tune filenames here when swapping shots. */

import { gallery } from "@/lib/gallery";

export const assets = {
  hero: gallery.e01,
  serviceConstruction: gallery.e01,
  serviceTiling: gallery.e02,
  servicePainting: gallery.e03,
  serviceDecking: gallery.e04,
  servicePaving: gallery.e05,
  serviceWaterproofing: gallery.e06,
  serviceRenovations: gallery.e07,
  servicePlumbing: gallery.e08,
  /** Separate URLs from hub proof pool so Recent Projects stays independent until more shots arrive */
  projectResidential: "/assets/project-residential.png",
  projectCommercial: "/assets/project-commercial.png",
  projectRenovation: "/assets/service-renovations.png",
  /** About hero: Cape Town crew / finishes (portfolio-only gallery slot) */
  aboutTeam: gallery.e22,
  /** About “on site” strip — single-use gallery URLs */
  aboutOnSite1: gallery.e23,
  aboutOnSite2: gallery.e24,
  aboutOnSite3: gallery.e25,
  /** Projects grid: distinct /assets shots so hub gallery pairing stays unchanged */
  projectHousing1: "/assets/project-residential.png",
  projectHousing2: "/assets/service-tiling.png",
  projectHousing3: "/assets/service-decking.png",
  projectCommercial1: "/assets/project-commercial.png",
  projectCommercial2: "/assets/service-painting.png",
  projectInfrastructure1: "/assets/service-paving.png",
  projectInfrastructure2: "/assets/service-construction.png",
  projectInfrastructure3: "/assets/service-waterproofing.png",
  projectRenovation1: "/assets/service-renovations.png",
} as const;
