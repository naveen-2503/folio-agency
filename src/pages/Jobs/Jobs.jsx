import "./Jobs.css";
import logo from "../../assets/images/logo.png";
import jobsLine from "../../assets/images/jobs-line.svg";
import JobCard from "../../components/JobCard/JobCard"; 
import { jobsData } from "../../data/jobsData";

const Jobs = () => {
  return (
    <section className="jobs">

      <img src={jobsLine} alt="" className="jobs-line" />

      <div className="jobs-inner">

        {/* ── Left column ── */}
        <div className="jobs-left">
          <div className="jobs-tag-row">
            <img src={logo} alt="" className="jobs-mini-logo" />
            <span className="jobs-tag-number">05.</span>
            <span className="jobs-tag-label">We are hiring</span>
          </div>

          <h2 className="jobs-title">Jobs</h2>

          <p className="jobs-desc">
            Agency is a full-service agency, busy designing
            and building beautiful digital products, brands,
            and experiences.
          </p>

          <div className="jobs-available">
            <span className="jobs-available-arrow">→</span>
            <span className="jobs-available-text">Available<br />jobs</span>
          </div>
        </div>

        {/* ── Right column: job cards ── */}
        <div className="jobs-right">
          {jobsData.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Jobs;