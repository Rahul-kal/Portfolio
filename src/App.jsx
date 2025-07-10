import "./App.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/servics/Services";
import Test from "./Test";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";


const App = () => {
  return (
    <div>
      <Cursor />
      <Sidebar />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      {/* what i did */}

      <section id="Portfolio">
      <Parallax type="portfolio" />
      </section>

      <Experience />

      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
      <section>
      <Services />
      </section>
      
      <Portfolio />
      
    {/* <About /> */} 

    
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};


export default App;
