import "../chooseUsCard/chooseUsCard.css";
import Image from "next/image";
import chooseUsCardIcon from "../../../../public/icon.svg";

const ChooseUsCard = ({ icon, title, description }) => {
  return (
    <div className="chooseUsCardContainer">
      <div className="chooseUsCardIcon">
        <Image
          src={chooseUsCardIcon}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="chooseUsCardContent">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
