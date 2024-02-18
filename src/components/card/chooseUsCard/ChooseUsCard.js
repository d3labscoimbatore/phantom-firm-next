import "../chooseUsCard/chooseUsCard.css";
import Image from "next/image";
import tickIcon from "../../../../public/tickIcon.svg";

const ChooseUsCard = ({ icon, title, description }) => {
  return (
    <div className="chooseUsCardContainer">
      <div className="chooseUsCardIcon">
        <Image src={tickIcon} width={100} height={"auto"} alt="icon" />
      </div>
      <div className="chooseUsCardContent">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
