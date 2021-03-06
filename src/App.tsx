import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { CtaSection } from "./components/ctaSection/CtaSection";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./pages/footer/Footer";
import { Home } from "./pages/home/Home";
import { Navbar } from "./pages/navbar/Navbar";
import { Projects } from "./pages/projects/Projects";

export const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <Home key="home" />
      <Navbar key="navbar" />
      <About key="about" />
      <CtaSection key="cta" />
      <Projects key="projects" />
      <Contact key="contact" />
      <Footer key="footer" />
    </AnimatePresence>
  );
};
