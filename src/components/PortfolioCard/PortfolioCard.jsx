import "./PortfolioCard.css";

const PortfolioCard = ({ item }) => {
  const { image, variant } = item;

  return (
    <div className={`portfolio-card portfolio-card-${variant}`}>
      <img src={image} alt="" className="portfolio-card-img" />
    </div>
  );
};

export default PortfolioCard;