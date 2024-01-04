import "./serviceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="title">
        <span className="tileIcon">{icon}</span>
        <h4 className="titleText">{title}</h4>
      </div>
      <div className="cardDescription">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
