import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ColombianBackdrop from "./components/ColombianBackdrop";

export const App = () => {
  return (
    <div className="overflow-x-hidden text-tierra-600 antialiased">
      <ColombianBackdrop />

      <div className="container mx-auto px-6 md:px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
