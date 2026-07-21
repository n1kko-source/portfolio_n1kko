import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NAV_LINKS } from "../constants";
import { springImpact } from "../lib/motion";
import { VueltiaoDiamond, VueltiaoStrip } from "./decorations/ColombianSVG";

export const Navbar = () => {
  return (
    <header className="nav-composition sticky top-0 z-50 mb-6 pt-2">
      <motion.div
        initial={{ opacity: 0, y: -32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={springImpact}
        className="mx-auto max-w-3xl"
      >
        <VueltiaoStrip className="h-2.5 w-full opacity-80" />

        <nav className="nav-composition-inner relative flex items-center justify-between gap-4 px-2 py-4 md:px-4">
          <VueltiaoDiamond className="absolute -left-1 top-1/2 h-8 w-8 -translate-y-1/2 opacity-50 md:-left-3 md:h-10 md:w-10" />
          <VueltiaoDiamond className="absolute -right-1 top-1/2 h-8 w-8 -translate-y-1/2 opacity-50 md:-right-3 md:h-10 md:w-10" />

          <Link
            to="/"
            className="font-display relative z-10 bg-gradient-to-r from-tierra-600 via-orquidea-500 to-cielo-600 bg-clip-text text-2xl font-bold tracking-wide text-transparent md:text-3xl"
          >
            N1kko
          </Link>

          <div className="relative z-10 hidden items-center gap-5 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-tierra-600 transition-all duration-300 hover:scale-105 hover:text-orquidea-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative z-10 flex items-center gap-3 md:gap-4">
            <a
              className="nav-link text-xl"
              href="https://www.linkedin.com/in/juan-nicolas-muñoz-tavera-446a15316?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="nav-link text-xl"
              href="https://github.com/n1kko-source"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="nav-link-instagram"
              href="https://www.instagram.com/nicolasmunoz.col?igsh=emVnejFnem9keHc3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram className="text-lg text-white" />
            </a>
          </div>
        </nav>

        <VueltiaoStrip className="h-2.5 w-full opacity-80" />
      </motion.div>
    </header>
  );
};

export default Navbar;
