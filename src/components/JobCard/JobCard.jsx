import "./JobCard.css";
import jobVisual from "../../assets/images/job-visual.png";

const JobCard = ({ job }) => {
  const { title, experience, badge, highlighted } = job;

  return (
    <div className={`job-card ${highlighted ? "job-card-highlighted" : ""}`}>
      <div className="job-card-text">
        <div className="job-card-title-row">
          <h3 className="job-card-title">{title}</h3>
          {badge && <span className="job-card-badge">{badge}</span>}
        </div>
        <p className="job-card-exp">{experience}</p>
        <button className="job-card-arrow" aria-label="View job">→</button>
      </div>

      {highlighted && (
        <img src={jobVisual} alt="" className="job-card-visual" />
      )}
    </div>
  );
};

export default JobCard;