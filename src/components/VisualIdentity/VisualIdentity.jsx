import "./VisualIdentity.css";
import logo from "../../assets/images/logo.png";
import visualIdentityLine from "../../assets/images/visualidentity-line.svg";

const VisualIdentity = () => {
  return (
    <section className="vi-section">
      <div className="vi-inner">

        <div className="vi-content-row">

          {/* ── Left: text content ── */}
          <div className="vi-left">
            <img src={logo} alt="Folio" className="vi-logo" />
            <img src={visualIdentityLine} alt="" className="vi-line" aria-hidden="true" />

            <div className="vi-eyebrow">
              <span className="vi-number">03.</span>
              <span className="vi-label">Visual Identity</span>
            </div>

            <h2 className="vi-title">Evolving the look &amp; feel.</h2>

            <p className="vi-desc">
              Agency is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </p>

            <div className="vi-stat">
              <h3 className="vi-stat-value">
                80<span className="vi-plus">+</span>
              </h3>
              <div className="vi-stat-label-row">
                <span className="vi-stat-line"></span>
                <span className="vi-stat-label">UI Elements</span>
              </div>
            </div>
          </div>

          {/* ── Right: feature card ── */}
          <div className="vi-right">
            <div className="vi-card">

              <div className="vi-feature">
                <div className="vi-feature-icon vi-icon-pink">
                  <span className="vi-icon-dot"></span>
                </div>
                <p className="vi-feature-text">Auto-updatable Global Styleguide</p>
              </div>

              <div className="vi-feature">
                <div className="vi-feature-icon vi-icon-purple">
                  <span className="vi-icon-dot"></span>
                </div>
                <p className="vi-feature-text">The number of applications and use cases is nearly endless.</p>
              </div>

              <div className="vi-feature">
                <div className="vi-feature-icon vi-icon-orange">
                  <span className="vi-icon-dot"></span>
                </div>
                <p className="vi-feature-text">Auto-updatable Global Styleguide</p>
              </div>

              <button className="vi-cta">Contact Us</button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisualIdentity;