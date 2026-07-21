import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionIdFromPath = (pathname) => {
  if (pathname === "/") return "hero";
  return pathname.replace(/^\//, "");
};

export const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = sectionIdFromPath(pathname);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToSection;
