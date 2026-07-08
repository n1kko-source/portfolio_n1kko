import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profilePic from "../assets/yo.jpeg";
import { floatDrift, impactPop } from "../lib/motion";

const FloatingChip = ({ label, className, duration }) => (
  <motion.span
    className={`absolute rounded-full border border-tierra-300/40 bg-papel-50/90 px-3 py-1 text-xs font-medium text-tierra-600 shadow-sm ${className}`}
    {...floatDrift(duration)}
  >
    {label}
  </motion.span>
);

export const ProfilePortrait = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={impactPop}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex w-full items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FloatingChip label="React" className="-left-3 top-6" duration={5} />
      <FloatingChip label="Python" className="-right-2 bottom-12" duration={6} />
      <FloatingChip label="TypeScript" className="right-2 top-2" duration={4.5} />

      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="gradient-border w-full"
      >
        <div className="gradient-border-inner shadow-lg shadow-tierra-400/15">
          <img
            src={profilePic}
            alt="Nicolas Muñoz"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePortrait;
