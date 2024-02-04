import "../about/about.css";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Button from "../button/Button";

function About({ aboutSection }) {
  const { label, title, description } = aboutSection;

  const firstPara = description.substring(0, 229);
  const secondPara = description.substring(230, 474);

  return (
    <section id="about" className="about container containerPadding">
      <div className="aboutLeft">
        <Image
          src={about}
          width="maxContent"
          height="maxContent"
          alt="About Phantom firm"
        />
      </div>
      <div className="aboutRight">
        <div className="label">
          <Button text={label} />
        </div>
        <h2 className="aboutTitle">{title}</h2>
        <div className="aboutPara">
          <p>{firstPara}</p>
          <p>{secondPara}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
