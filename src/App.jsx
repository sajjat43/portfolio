import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-panel">
        <main>
          <Hero />
          <About />
          <Services />
          <Work />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
