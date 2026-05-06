import Image from "next/image";
import { cn } from "@/lib/utils";

/** Official raster logo — replace `public/brand/teamedlick-logo.png` only; do not redraw in code. */
export const TEAM_EDLICK_LOGO_SRC = "/brand/teamedlick-logo.png";

type Props = {
  className?: string;
  /** Diameter of the circular logo (equal width & height) */
  sizeClass?: string;
  priority?: boolean;
};

export function TeamEdlickLogo({
  className,
  sizeClass = "h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11",
  priority,
}: Props) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/10",
        sizeClass,
        className,
      )}
    >
      <Image
        src={TEAM_EDLICK_LOGO_SRC}
        alt="Team Edlick PVT Ltd — waterproofing, painting, renovating, plumbing, paving"
        fill
        priority={priority}
        className="object-cover"
        sizes="64px"
      />
    </span>
  );
}
