import "../chooseUs/chooseUs.css";
import Button from "../button/Button";
import ChooseUsCard from "../card/chooseUsCard/ChooseUsCard";

const chooseUs = ({ benefitsSection }) => {
  const { label, title, subTitle, benefits } = benefitsSection;

  return (
    <section className="chooseUs">
      <div className="chooseUsContainer container containerPadding">
        <div className="label">
          <Button text= {label} />
        </div>
        <div className="chooseUsTitle">
          <h2 className="chooseUsTitleText">
             {title}
          </h2>
          <p className="chooseUsTitleDesc">
           {subTitle}
          </p>
        </div>
        <div className="chooseUsCard">
          {benefits.map(({ id, icon, title, description }) => (
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
