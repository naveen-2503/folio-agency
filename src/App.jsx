import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CaseStudy from "./pages/CaseStudy/CaseStudyHero";
import Services from "./components/Services/Services";   
import Jobs from "./pages/Jobs/Jobs";  

function App() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="case-study" element={<CaseStudy />} />

        <Route path="services" element={<Services />} />  

        <Route path="jobs" element={<Jobs />} /> 

      </Route>

    </Routes>
  );
}

export default App;