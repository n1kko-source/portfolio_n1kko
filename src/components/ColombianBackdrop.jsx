import { motion, useScroll, useTransform } from "framer-motion";
import indigenousPattern from "../assets/patterns/indigenous-pattern.png";
import {
  GeometricBlueMountains,
  VueltiaoPatternTile,
} from "./decorations/ColombianSVG";

export const ColombianBackdrop = () => {
  const { scrollY } = useScroll();
  const mountainY = useTransform(scrollY, [0, 800], [0, 50]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-papel-100">
      {/* Warm sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cielo-200/40 via-papel-100 to-papel-200/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(252,209,22,0.15),transparent_60%)]" />

      {/* Indigenous art pattern — subtle watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${indigenousPattern})`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Vueltiao diamond weave overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <VueltiaoPatternTile className="h-full w-full" />
      </div>

      {/* Paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blue geometric mountains */}
      <motion.div
        style={{ y: mountainY }}
        className="pointer-events-none absolute bottom-0 left-0 right-0"
      >
        <GeometricBlueMountains className="h-52 w-full md:h-64 lg:h-80" />
      </motion.div>
    </div>
  );
};

export default ColombianBackdrop;
