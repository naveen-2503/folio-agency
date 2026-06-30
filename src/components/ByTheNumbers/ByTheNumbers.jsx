import "./ByTheNumbers.css";
import logo from "../../assets/images/logo.png"; 
import numbersIllustration from "../../assets/images/numbers-illustration.png";

const ByTheNumbers = () => {
  return (
    <section className="btn-section">
      <div className="btn-inner">

        <img src={logo} alt="Folio" className="btn-logo" />

        {/* ── Eyebrow ── */}
        <div className="btn-eyebrow">
          <span className="btn-number">02.</span>
          <span className="btn-label">Folio Agency</span>
        </div>

        <h2 className="btn-title">By the Numbers.</h2>

        {/* ── Stats row ── */}
        <div className="btn-stats-row">

          <div className="btn-stat-col">
            <h3 className="btn-stat-value">20</h3>
            <p className="btn-stat-label">Pre-build Scenes 🔥</p>
            <hr className="btn-divider" />
            <p className="btn-stat-desc">
              Bento is the first fully editable, 3D visual design system with
              global auto-updatable style guides built right in Figma.
            </p>
            <button className="btn-download">
              <span className="btn-download-icon">↓</span> Download
            </button>
          </div>

          <div className="btn-stat-col">
            <h3 className="btn-stat-value">
              40<span className="btn-plus">+</span>
            </h3>
            <p className="btn-stat-label">Scene Objects</p>
            <hr className="btn-divider" />
            <p className="btn-stat-desc">
              Bento is the first fully editable, 3D visual design system with
              global auto-updatable style guides built right in Figma.
            </p>
            <button className="btn-download">
              <span className="btn-download-icon">↓</span> Download
            </button>
          </div>

        </div>

        {/* ── Progress nav (desktop) ── */}
<div className="btn-progress-nav">
  <div className="btn-progress-track">
    <div className="btn-progress-item">
      <span className="btn-progress-dot active"></span>
      <span className="btn-progress-label active">Overview</span>
    </div>
    <div className="btn-progress-item">
      <span className="btn-progress-dot"></span>
      <span className="btn-progress-label">Features</span>
    </div>
    <div className="btn-progress-item">
      <span className="btn-progress-dot"></span>
      <span className="btn-progress-label">Highlights</span>
    </div>
    <div className="btn-progress-item">
      <span className="btn-progress-dot"></span>
      <span className="btn-progress-label">Compatibility</span>
    </div>
  </div>
</div>

{/* ── Illustration card with arrows ── */}
<div className="btn-illustration-wrapper">
  <button className="btn-nav-arrow btn-nav-prev" aria-label="Previous">←</button>

  <div className="btn-illustration-card">
    <img src={numbersIllustration} alt="Design tools illustration" className="btn-illustration" />
  </div>

  <button className="btn-nav-arrow btn-nav-next" aria-label="Next">→</button>
</div>

{/* ── Mobile dropdown selector ── */}
<div className="btn-mobile-dropdown">
  <select className="btn-dropdown-select" defaultValue="overview">
    <option value="overview">Overview</option>
    <option value="features">Features</option>
    <option value="highlights">Highlights</option>
    <option value="compatibility">Compatibility</option>
  </select>
</div>
      </div>
    </section>
  );
};

export default ByTheNumbers;