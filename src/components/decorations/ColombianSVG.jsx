import { useId } from "react";

/** Stepped geometric mountains — blue tones, vueltiao-inspired angles */
export const GeometricBlueMountains = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 1440 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0 360V280L160 240L320 300L480 180L640 260L800 140L960 220L1120 160L1280 240L1440 200V360H0Z"
      fill="#5C9EAD"
      opacity="0.25"
    />
    <path
      d="M0 360V300L200 260L400 320L600 200L800 280L1000 170L1200 250L1440 220V360H0Z"
      fill="#3D7A8A"
      opacity="0.4"
    />
    <path
      d="M0 360V320L240 290L480 340L720 240L960 310L1200 260L1440 290V360H0Z"
      fill="#2A5F6E"
      opacity="0.55"
    />
    <path
      d="M480 180L520 200L560 180L600 200L640 260"
      stroke="#0077B6"
      strokeWidth="2"
      opacity="0.3"
      fill="none"
    />
    <path
      d="M800 140L840 160L880 140L920 160L960 220"
      stroke="#0077B6"
      strokeWidth="2"
      opacity="0.3"
      fill="none"
    />
  </svg>
);

/** Horizontal vueltiao zigzag strip — caña flecha weave */
export const VueltiaoStrip = ({ className = "" }) => {
  const patternId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 400 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 12L6 0L12 12L18 0L24 12" stroke="#6B4226" strokeWidth="2.5" fill="none" />
          <path
            d="M0 12L6 0L12 12L18 0L24 12"
            stroke="#FCD116"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </pattern>
      </defs>
      <rect width="400" height="12" fill={`url(#${patternId})`} />
    </svg>
  );
};

/** Diamond motif from sombrero vueltiao weaving */
export const VueltiaoDiamond = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M40 4L76 40L40 76L4 40Z" stroke="#6B4226" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M40 14L66 40L40 66L14 40Z" stroke="#6B4226" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path
      d="M40 24L56 40L40 56L24 40Z"
      stroke="#FCD116"
      strokeWidth="1"
      fill="#FCD116"
      fillOpacity="0.15"
      opacity="0.6"
    />
    <path d="M40 4L40 76M4 40L76 40" stroke="#6B4226" strokeWidth="0.75" opacity="0.25" />
  </svg>
);

/** Repeating vueltiao diamond tile for backgrounds */
export const VueltiaoPatternTile = ({ className = "" }) => {
  const patternId = useId();

  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={patternId} x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M24 2L46 24L24 46L2 24Z" stroke="#6B4226" strokeWidth="1" fill="none" opacity="0.2" />
          <path d="M24 10L38 24L24 38L10 24Z" stroke="#A67C52" strokeWidth="0.75" fill="none" opacity="0.15" />
          <path d="M0 24H48M24 0V48" stroke="#6B4226" strokeWidth="0.5" opacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
