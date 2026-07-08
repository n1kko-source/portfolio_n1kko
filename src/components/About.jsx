import { motion } from "framer-motion";
import { ABOUT_QUOTE, ABOUT_TEXT, SOMBRERO_3D_CREDIT } from "../constants";
import { bloom, impactPop, sectionHeading } from "../lib/motion";
import SombreroVueltiao3D from "./SombreroVueltiao3D";

export const About = () => {
  return (
    <section id="about" className="section-border relative pb-20 pt-8">
      <motion.h2
        variants={sectionHeading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="section-heading my-12 text-center"
      >
        About <span className="section-heading-accent">Me</span>
      </motion.h2>

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.div
          variants={impactPop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-6 w-full"
        >
          <SombreroVueltiao3D />
          <p className="mt-3 text-xs tracking-widest text-tierra-400 uppercase">
            Caña flecha · Colombia
          </p>
          <p className="mt-2 text-xs leading-relaxed text-tierra-400">
            3D model{" "}
            <a
              href={SOMBRERO_3D_CREDIT.modelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orquidea-600 underline decoration-orquidea-300 underline-offset-2 hover:text-orquidea-500"
            >
              {SOMBRERO_3D_CREDIT.title}
            </a>{" "}
            by{" "}
            <a
              href={SOMBRERO_3D_CREDIT.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orquidea-600 underline decoration-orquidea-300 underline-offset-2 hover:text-orquidea-500"
            >
              {SOMBRERO_3D_CREDIT.author}
            </a>{" "}
            · {SOMBRERO_3D_CREDIT.license}
          </p>
        </motion.div>

        <motion.p
          variants={bloom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-xl leading-relaxed text-tierra-500"
        >
          {ABOUT_TEXT}
        </motion.p>

        <motion.blockquote
          variants={bloom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 max-w-md border-t border-tierra-300/40 pt-6"
        >
          <p className="text-sm italic leading-relaxed text-tierra-400">
            {ABOUT_QUOTE}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default About;
