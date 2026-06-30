import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CaseStudy from "./pages/CaseStudy/CaseStudy";

function App() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="case-study" element={<CaseStudy />} />

      </Route>

    </Routes>
  );
}

export default App;