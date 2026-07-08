import { motion } from "framer-motion";
import { TOOLS_FROM_PROJECTS } from "../constants";
import { sectionHeading, staggerContainer, staggerItem } from "../lib/motion";

export const Technologies = () => {
  return (
    <section id="tools" className="section-border pb-24">
      <motion.h2
        variants={sectionHeading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="section-heading my-16 text-center"
      >
        Tools I've Used in{" "}
        <span className="section-heading-accent">Projects</span>
      </motion.h2>

      <p className="mx-auto mb-10 max-w-xl text-center text-sm text-tierra-500">
        Only technologies that appear in the repositories linked above — nothing aspirational.
      </p>

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {TOOLS_FROM_PROJECTS.map((tool) => (
          <motion.span
            key={tool.name}
            variants={staggerItem}
            whileHover={{ scale: 1.12, y: -4 }}
            className="rounded-full border border-tierra-300/40 bg-papel-50/90 px-4 py-2 text-sm font-medium text-tierra-600 shadow-sm transition-colors hover:border-orquidea-400/50 hover:bg-papel-200"
          >
            {tool.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
