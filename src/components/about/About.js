import "../about/about.css";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Button from "../button/Button";

function About() {
  return (
    <div className="about container" id="about">
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
          <Button text="About Phantom" />
        </div>
        <h2 className="aboutTitle">
        Revolutionize, Empower, Conquer Digitally! 
        </h2>
        <div className="aboutPara">
          <p>
            At Phantom, we&apos;re on a mission to catapult businesses into the
            future. With a seamless blend of cutting-edge tech and strategic
            vision, we&apos;re not just guiding clients; we&apos;re steering
            them through a transformative digital journey.
          </p>
          <p>
            Welcome to the dynamic world of
            <span className="companyName"> Phantom</span> - your trailblazing
            partner in digital transformation, based in Tamil Nadu, India. Here,
            innovation meets impact, and we specialize in propelling businesses
            forward through the potent force of technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
