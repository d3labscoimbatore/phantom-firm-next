import "../chooseUs/chooseUs.css";
import Button from "../button/Button";
import ChooseUsCard from "../card/chooseUsCard/ChooseUsCard";
import { WhyUs } from "@/app/utility/data";

const chooseUs = () => {
  return (
    <section className="chooseUs">
      <div className="chooseUsContainer container containerPadding">
        <div className="label">
          <Button text="Why Choose Us" />
        </div>
        <div className="chooseUsTitle">
          <h2 className="chooseUsTitleText">
            Fueling enthusiasm with inventive solutions for active involvement
          </h2>
          <p className="chooseUsTitleDesc">
            Unleash your aspirations with our unparalleled expertise, where your
            ambitions find a steadfast ally.
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
    </section>
  );
};

export default chooseUs;
