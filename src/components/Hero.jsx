import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import { impactPop, springImpact } from "../lib/motion";
import ProfilePortrait from "./ProfilePortrait";

const centeredItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 56, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springImpact, delay },
  },
});

export const Hero = () => {
  return (
    <section
      id="hero"
      className="section-border relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center pb-20 pt-4"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <motion.p
          variants={centeredItem(0)}
          initial="hidden"
          animate="visible"
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-orquidea-500"
        >
          Tunja, Boyacá · Colombia
        </motion.p>

        <motion.h1
          variants={centeredItem(0.08)}
          initial="hidden"
          animate="visible"
          className="font-display pb-4 text-5xl font-bold tracking-tight text-tierra-700 lg:text-7xl"
        >
          Nicolas Muñoz
        </motion.h1>

        <motion.span
          variants={centeredItem(0.18)}
          initial="hidden"
          animate="visible"
          className="section-heading-accent text-xl font-medium tracking-tight lg:text-2xl"
        >
          Systems Engineering Student · Building real software
        </motion.span>

        <motion.p
          variants={centeredItem(0.28)}
          initial="hidden"
          animate="visible"
          className="my-6 max-w-lg text-base leading-relaxed text-tierra-500 lg:text-lg"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div
          variants={impactPop}
          initial="hidden"
          animate="visible"
          transition={{ ...springImpact, delay: 0.42 }}
          className="mt-4 w-full max-w-sm"
        >
          <ProfilePortrait />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
