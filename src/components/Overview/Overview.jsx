import "./Overview.css";
import overviewIllustration from "../../assets/images/overview-illustration.png";
import iconEditable from "../../assets/images/icon-editable.png";
import iconResolution from "../../assets/images/icon-resolution.png";

const Overview = () => {
  return (
    <section className="overview">
      <div className="ov-inner">

        <div className="ov-content-row">

          {/* ── Left: Image ── */}
          <div className="ov-left">
            <div className="ov-img-wrapper">
              <img src={overviewIllustration} alt="3D Visual Design System" className="ov-illustration" />
            </div>
            <div className="ov-dots">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div className="ov-right">
            <div className="ov-eyebrow">
              <span className="ov-number">01.</span>
              <span className="ov-label">Overview</span>
            </div>

            <h2 className="ov-title">
              The First Fully Editable, 3D Visual Design System.
            </h2>

            <p className="ov-desc">
              Effortlessly combine different elements to create compelling
              compositions that will surely help you tell a better story for
              your landing pages, websites, portfolios, presentations, and
              more in just a matter of minutes.
            </p>

            <p className="ov-highlight">
              🔥 <strong>The number of applications and use cases is nearly endless.</strong>
            </p>

            <div className="ov-cards">
              <div className="ov-card">
                <div className="ov-card-icon">
                  <img src={iconEditable} alt="Fully Editable" />
                </div>
                <span className="ov-card-label">Fully Editable</span>
              </div>

              <div className="ov-card">
                <div className="ov-card-icon">
                  <img src={iconResolution} alt="High Resolution" />
                </div>
                <span className="ov-card-label">High Resolution</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;