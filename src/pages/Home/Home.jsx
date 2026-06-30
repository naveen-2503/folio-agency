import Hero from "../../components/Hero/Hero";
import About from "../../pages/About/About";
import Services from "../../components/Services/Services";
import Stats from "../../components/Stats/Stats";
import Portfolio from "../../components/Portfolio/Portfolio";
import CTA from "../../components/CTA/CTA";
import Jobs from "../../pages/Jobs/Jobs";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <CTA />
      <Jobs />
      <Footer />
    
    </>
  );
};

export default Home;