import "./Stats.css";
import logo from "../../assets/images/logo.png";
import statsLine from "../../assets/images/stats-line.svg";
import mobile from "../../assets/images/mobile.png";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-row4">

       
        <div className="stats-phone-wrap">
          <div className="stats-phone-circle-bg"></div>
          <img src={mobile} alt="App mockup" className="stats-phone-img" />
        </div>

        <div className="stats-achievement">
          <div className="stats-tag-row">
            <img src={statsLine} alt="" className="stats-line" />
            <img src={logo} alt="" className="stats-mini-logo" />
            <span className="stats-tag-number">03.</span>
            <span className="stats-tag-label">Achievement</span>
          </div>
          <p className="stats-achievement-title">
            A design team building a curated<br />
            marketplace for UI designers.
          </p>
          <span className="stats-stat-number">68</span>
          <div className="stats-stat-label">
            <span role="img" aria-label="trophy">🏆</span> Successful Projects
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;