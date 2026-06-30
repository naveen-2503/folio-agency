import "./Hero.css";
import heroImage from "../../assets/images/hero-image.png";
import heroLine from "../../assets/images/hero-line.svg";
import purpleBg from "../../assets/images/purple-bg.svg";

const Hero = () => {
  return (
    <section className="hero">

      {/* Decorative circles
      <div className="hero-decoration">
        <span className="circle circle-1"></span>
        <span className="circle circle-2"></span>
        <span className="circle circle-3"></span>
      </div> */}

      <div className="container hero-container">

        {/* ── LEFT ── */}
        <div className="hero-content">

          <img src={heroLine} alt="" className="hero-line" aria-hidden="true" />

          <h1 className="hero-title">
            Stand Out<br />
            from The<br />
            Crowd.
          </h1>

          <p className="hero-description">
            Agency is a full-service agency, busy designing
            and building beautiful digital products, brands,
            and experiences.
          </p>

          <button className="hero-btn">Recent Work</button>

          <div className="scroll-indicator">
            <div className="scroll-dot">↓</div>
            <span>Scroll down</span>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="hero-image-wrapper">
          <img src={purpleBg} alt="" className="purple-bg" aria-hidden="true" />
          <img src={heroImage} className="hero-image" alt="3D design illustration" />
        </div>

      </div>
    </section>
  );
};

export default Hero;