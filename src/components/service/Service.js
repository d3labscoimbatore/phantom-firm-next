import "../service/service.css";
import Button from "../button/Button";
import { ServiceData } from "@/app/utility/data";
import ServiceCard from "../card/serviceCard/ServiceCard";

const Service = () => {
  return (
    <div className="background">
      <div className="service container" id="solutions">
        <div className=" serviceContainer ">
          <div className="label">
            <Button text="What we do" />
          </div>
          <div className="serviceTitle">
            <h2>Elite Solutions Collection</h2>
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
      </div>
    </div>
  );
};

export default Service;
