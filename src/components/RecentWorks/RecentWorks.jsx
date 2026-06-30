import "./RecentWorks.css";
import logo from "../../assets/images/logo.png";
import work1 from "../../assets/images/work-bento-3d.png";
import work2 from "../../assets/images/work-bento-vol3.png";

const works = [
  {
    id: 1,
    badge: "Featured Product",
    image: work1,
    bg: "rw-bg-orange",
    title: "Bento 3D Illustration",
    desc: "Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.",
  },
  {
    id: 2,
    badge: null,
    image: work2,
    bg: "rw-bg-blue",
    title: "Bento Vol. 3",
    desc: "Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.",
  },
];

const RecentWorks = () => {
  return (
    <section className="rw-section">
      <div className="rw-inner">

        {/* ── Top row: eyebrow + title + arrow ── */}
        <div className="rw-top">
          <div className="rw-top-left">
            <img src={logo} alt="Folio" className="rw-logo" />
            <div className="rw-eyebrow">
              <span className="rw-number">04.</span>
              <span className="rw-label">You may also like</span>
            </div>
            <h2 className="rw-title">Recent Works</h2>
          </div>

          <button className="rw-arrow-btn" aria-label="See all works">→</button>
        </div>

        <p className="rw-desc">
          Agency is a full-service agency, busy designing and building
          beautiful digital products, brands, and experiences.
        </p>

        {/* ── Works grid ── */}
        <div className="rw-grid">
          {works.map((work) => (
            <div className="rw-card" key={work.id}>

              <div className={`rw-card-image ${work.bg}`}>
                {work.badge && <span className="rw-badge">{work.badge}</span>}
                <img src={work.image} alt={work.title} className="rw-card-img" />
                <button className="rw-card-arrow" aria-label={`View ${work.title}`}>→</button>
              </div>

              <h3 className="rw-card-title">{work.title}</h3>
              <p className="rw-card-desc">{work.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentWorks;