import "./ServiceCard.css";

const ServiceCard = ({ icon, label, active }) => {
  return (
    <div className={`service-card ${active ? "service-card-active" : ""}`}>
      <div className="service-icon-circle">{icon}</div>
      <span className="service-card-label">{label}</span>
    </div>
  );
};

export default ServiceCard;