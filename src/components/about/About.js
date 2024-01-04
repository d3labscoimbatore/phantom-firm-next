import "../about/about.css";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Button from "../button/Button";

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutLeft">
        <Image src={about} width="maxContent" height="maxContent" alt="About Phantom firm" />
      </div>
      <div className="aboutRight">
        <div className="label">
          <Button text="About Phantom" />
        </div>
        <h2 className="aboutTitle" >Empowering Futures through Digital Transformation</h2>
        <div className="aboutPara">
          <p>
            Our mission is to propel organizations into the future by seamlessly
            integrating innovative digital solutions. We believe in the
            transformative impact of technology when applied strategically, and
            we are committed to guiding our clients through every step of their
            digital journey.
          </p>
          <p>
            Welcome to <span className="companyName">Phantom</span>, a trailblazing force in the realm of digital
            transformation. As a dynamic and forward-thinking company based in
            Tamil Nadu, India, we specialize in harnessing the power of
            cutting-edge technology to drive meaningful change for businesses
            across diverse industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
