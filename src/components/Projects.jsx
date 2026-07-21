import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { sectionHeading, staggerContainer } from "../lib/motion";
import ProjectCard from "./ProjectCard";
import WaveDivider from "./WaveDivider";

export const Projects = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-border pb-16">
      <motion.h2
        variants={sectionHeading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="section-heading my-16 text-center"
      >
        <span className="section-heading-accent">Projects</span>
      </motion.h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-tierra-500">
        Everything here links to a real repository. No filler, just software I've actually built or contributed to.
      </p>

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      <WaveDivider />
    </section>
  );
};

export default Projects;
