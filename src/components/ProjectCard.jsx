import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectPlaceholder from "./ProjectPlaceholder";

const categoryLabels = {
  web: "Web",
  mobile: "Mobile",
  desktop: "Desktop",
  collaborative: "Collaborative",
};

const categoryColors = {
  web: "bg-cielo-200/60 text-cielo-600 border-cielo-400/40",
  mobile: "bg-orquidea-500/10 text-orquidea-600 border-orquidea-400/40",
  desktop: "bg-montana-300/20 text-montana-600 border-montana-400/40",
  collaborative: "bg-sol-300/40 text-tierra-600 border-sol-500/40",
};

export const ProjectCard = ({ project, featured = false }) => {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.94 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`glass-card group overflow-hidden ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className={`flex flex-col ${featured ? "lg:flex-row" : ""}`}>
        <div className={featured ? "lg:w-2/5" : "w-full"}>
          <ProjectPlaceholder project={project} featured={featured} />
        </div>
        <div className={`flex flex-col justify-center p-6 ${featured ? "lg:w-3/5 lg:p-8" : ""}`}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                categoryColors[project.category]
              }`}
            >
              {categoryLabels[project.category]}
            </span>
            {project.featured && (
              <span className="rounded-full border border-sol-500/40 bg-sol-300/30 px-2.5 py-0.5 text-xs font-medium text-tierra-600">
                Featured
              </span>
            )}
          </div>

          <h3 className="mb-2 font-display text-xl font-semibold text-tierra-700 transition-colors group-hover:text-orquidea-500">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-tierra-500">
            {project.description}
          </p>

          <div className="mb-5 flex flex-wrap">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaGithub className="text-base" />
              View Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
