import "../chooseUs/chooseUs.css";
import Button from "../button/Button";
import ChooseUsCard from "../card/chooseUsCard/ChooseUsCard";
import { WhyUs } from "@/app/utility/data";

const chooseUs = () => {
  return (
    <div className="chooseUs">
      <div className="chooseUsContainer">
        <div className="label">
          <Button text="Why Choose Us" />
        </div>
        <div className="chooseUsTitle">
          <h2 className="chooseUsTitleText">
            Inspiring engagement through innovative solutions
          </h2>
          <p className="chooseUsTitleDesc">
            Empower your ambitions with our unmatched expertise, where your
            goals discover a reliable companion.
          </p>
        </div>
        <div className="chooseUsCard">
          {WhyUs.map(({ id, icon, title, description }) => (
            <ChooseUsCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default chooseUs;
