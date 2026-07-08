import { motion } from "framer-motion";
import { CERTIFICATIONS, EDUCATION } from "../constants";
import { sectionHeading, staggerContainer, staggerItem } from "../lib/motion";
import WaveDivider from "./WaveDivider";

const TimelineEntry = ({ entry, isCertification = false, isLast = false }) => (
  <motion.div variants={staggerItem} className="relative flex gap-6 pb-12 last:pb-0">
    <div className="relative flex flex-col items-center">
      <div className="z-10 h-4 w-4 rounded-full border-2 border-sol-500 bg-papel-100 shadow-[0_0_8px_rgba(255,183,3,0.35)]" />
      {!isLast && (
        <div className="absolute top-4 h-full w-0.5 bg-gradient-to-b from-sol-400/50 to-tierra-300/30" />
      )}
    </div>

    <div className="flex-1 pb-2">
      <p className="mb-1 text-sm font-medium text-orquidea-500">{entry.year}</p>
      {isCertification ? (
        <>
          <h3 className="mb-1 font-display text-lg font-semibold text-tierra-700">
            {entry.title}
          </h3>
          <p className="mb-2 text-sm text-cielo-600">{entry.platform}</p>
        </>
      ) : (
        <>
          <h3 className="mb-1 font-display text-lg font-semibold text-tierra-700">
            {entry.role}
          </h3>
          <p className="mb-2 text-sm text-cielo-600">{entry.institution}</p>
        </>
      )}
      <p className="mb-3 text-sm leading-relaxed text-tierra-500">
        {entry.description}
      </p>
      <div className="flex flex-wrap">
        {entry.technologies.map((tech) => (
          <span key={tech} className="tech-chip">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Experience = () => {
  return (
    <section id="experience" className="section-border pb-16">
      <motion.h2
        variants={sectionHeading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="section-heading my-16 text-center"
      >
        Education & <span className="section-heading-accent">Formation</span>
      </motion.h2>

      <div className="mx-auto max-w-2xl">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {EDUCATION.map((entry, i) => (
            <TimelineEntry
              key={entry.role}
              entry={entry}
              isLast={i === EDUCATION.length - 1 && CERTIFICATIONS.length === 0}
            />
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="mb-6 mt-4 font-display text-xl font-semibold text-tierra-700"
        >
          Courses & Certifications
        </motion.h3>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CERTIFICATIONS.map((entry, i) => (
            <TimelineEntry
              key={entry.title}
              entry={entry}
              isCertification
              isLast={i === CERTIFICATIONS.length - 1}
            />
          ))}
        </motion.div>
      </div>

      <WaveDivider />
    </section>
  );
};

export default Experience;
