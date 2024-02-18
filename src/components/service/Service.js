import "../service/service.css";
import Button from "../button/Button";
import { ServiceData } from "@/app/utility/data";
import ServiceCard from "../card/serviceCard/ServiceCard";

const Service = ({ serviceSection }) => {

  const { label, title } = serviceSection;

  return (
    <div id="solutions"className="containerBackground">
      <section  className="service container containerPadding">
        <div className=" serviceContainer ">
          <div className="label">
            <Button text={label} />
          </div>
          <div className="serviceTitle">
            <h2>{title}</h2>
          </div>
          <div className="serviceCard">
            {ServiceData.map(({ id, icon, title, description }) => (
              <ServiceCard
                key={id}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
