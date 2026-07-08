import { FaDesktop, FaGlobe, FaMobileAlt, FaUsers } from "react-icons/fa";

const categoryIcons = {
  web: FaGlobe,
  mobile: FaMobileAlt,
  desktop: FaDesktop,
  collaborative: FaUsers,
};

const imageFrameClass = (featured) =>
  featured
    ? "relative aspect-video w-full overflow-hidden bg-papel-200 lg:aspect-auto lg:min-h-[280px]"
    : "relative aspect-video w-full overflow-hidden bg-papel-200";

export const ProjectPlaceholder = ({ project, featured = false }) => {
  const objectPosition = project.imagePosition ?? "object-center";

  if (project.image) {
    return (
      <div className={imageFrameClass(featured)}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={`absolute inset-0 h-full w-full object-cover ${objectPosition} transition-transform duration-500 group-hover:scale-105`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tierra-700/10 to-transparent" />
      </div>
    );
  }

  const Icon = categoryIcons[project.category] || FaGlobe;
  const { gradient, label } = project.placeholder;

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${imageFrameClass(featured)}`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-black/20 blur-2xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-3 p-6 text-center">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
          <Icon className="text-4xl text-white/90" />
        </div>
        <span className="text-sm font-medium text-white/80">{label}</span>
        <span className="text-xs text-white/50">Screenshot coming soon</span>
      </div>
    </div>
  );
};

export default ProjectPlaceholder;
