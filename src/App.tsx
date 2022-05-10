import { CtaSection } from "./components/ctaSection/CtaSection";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./pages/footer/Footer";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";

export const App = () => {



  return (
    <>
      <Home   />
      <About  />
      <CtaSection />
      <Projects  />
      <Contact />
      <Footer />
    </>
  );
};
