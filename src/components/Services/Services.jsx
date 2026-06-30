import "./Services.css";
import logo from "../../assets/images/logo.png";
import servicesLine from "../../assets/images/services-line.svg";
import ServiceCard from "../ServiceCard/ServiceCard";
import { FaChartBar, FaLeaf, FaCircle, FaCommentDots } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
       {/* ── Decorative squiggly line ── */}
      <img src={servicesLine} alt="" className="services-line" />
      {/* ── ROW 1: logo + tag + arrows ── */}
      <div className="services-row1">
        <img src={logo} alt="folio" className="services-logo" />
        <div className="services-tag-center">
          <span className="services-tag-number">02.</span>
          <span className="services-tag-label">What We Do</span>
        </div>
        <div className="services-arrows">
          <button className="arrow-btn arrow-prev" aria-label="Previous">←</button>
          <button className="arrow-btn arrow-next" aria-label="Next">→</button>
        </div>
      </div>

      {/* ── ROW 2: title ── */}
      <h2 className="services-title">
        We Make Designs that<br />
        Lead and Inpire.
      </h2>

      {/* ── ROW 3: service cards ── */}
      <div className="services-cards">
        <ServiceCard icon={<FaChartBar />} label="Strategy" />
        <ServiceCard icon={<FaLeaf />} label="Branding" active />
        <ServiceCard icon={<FaCircle />} label="Interactive" />
        <ServiceCard icon={<FaCommentDots />} label="Communicate" />
      </div>

    </section>
  );
};

export default Services;