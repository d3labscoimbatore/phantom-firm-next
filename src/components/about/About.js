import "../about/about.css";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Button from "../button/Button";

function About({ aboutSection }) {
  const { Label, Title, Paragraph1, Paragraph2 } = aboutSection;
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
          <Button text={Label} />
        </div>
        <h2 className="aboutTitle">{Title}</h2>
        <div className="aboutPara">
          <p>{Paragraph1}</p>
          <p>{Paragraph2}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
