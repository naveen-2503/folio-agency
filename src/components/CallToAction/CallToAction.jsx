import "./CallToAction.css";
import logo from "../../assets/images/logo.png";
import ctaBgLeft from "../../assets/images/cta-bg-left.png";
import ctaShapeRight from "../../assets/images/cta-shape-right.png";
import ctaPhone from "../../assets/images/cta-phone.png";

const CallToAction = () => {
  return (
    <section className="cta">

      {/* ── Decorative background shape (left, stays behind) ── */}
      <img src={ctaBgLeft} alt="" className="cta-bg-left" />

      {/* ── Main gradient panel ── */}
      <div className="cta-panel">

        <div className="cta-logo-badge">
          <img src={logo} alt="" />
        </div>

        <img src={ctaPhone} alt="App illustration" className="cta-phone-img" />

        <div className="cta-content">
          <div className="cta-tag-row">
            <span className="cta-tag-number">04.</span>
            <span className="cta-tag-label">Call to action</span>
          </div>
          <h2 className="cta-title">
            Auto Updat<br />
            able Global<br />
            Styleguide
          </h2>
          <button className="cta-btn">Downloaded Now</button>
        </div>

        {/* ── Decorative shape moved inside the panel, after content ── */}
        <img src={ctaShapeRight} alt="" className="cta-shape-right" />

      </div>

    </section>
  );
};

export default CallToAction;