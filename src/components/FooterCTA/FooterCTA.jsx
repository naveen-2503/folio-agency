import "./FooterCTA.css";
import logo from "../../assets/images/logo.png";
import footerBanner from "../../assets/images/footer-banner.png";
import footerLine from "../../assets/images/footer-line.svg";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterCTA = () => {
  return (
    <footer className="site-footer">

      {/* ── Purple banner (single image) ── */}
      <div className="footer-banner-wrap">
        <img src={footerBanner} alt="Let's talk about your next project" className="footer-banner-img" />
      </div>

      {/* ── Footer content ── */}
      <div className="footer-content">

        <img src={footerLine} alt="" className="footer-line" />

        <div className="footer-inner">

          <div className="footer-brand">
            <img src={logo} alt="" className="footer-logo" />
            <span className="footer-wordmark">folio.</span>
          </div>

          <p className="footer-desc">
            Agency is a full-service agency, busy designing and building beautiful
            digital products, brands, and experiences.
          </p>

          <nav className="footer-nav">
            <a href="/about" className="footer-nav-link active">About</a>
            <a href="/work" className="footer-nav-link">Work</a>
            <a href="/services" className="footer-nav-link">Services</a>
            <a href="/jobs" className="footer-nav-link">Jobs</a>
          </nav>

          <div className="footer-divider"></div>

          <div className="footer-bottom-row">
            <span className="footer-copyright">© 2020, UI8 LLC.</span>
            <div className="footer-social">
              <span className="footer-follow">Follow us</span>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default FooterCTA;