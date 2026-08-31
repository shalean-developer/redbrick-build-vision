import Image from "next/image";
import { cn } from "@/lib/utils";

/** Official Team Edlick brand mark used in compact header/logo placements. */
export const TEAM_EDLICK_LOGO_SRC = "/brand/teamedlick-mark.svg";

type Props = {
  className?: string;
  /** Diameter of the compact logo mark (equal width & height). */
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
        alt="Team Edlick PVT Ltd"
        fill
        priority={priority}
        className="object-contain"
        sizes="64px"
      />
    </span>
  );
}
