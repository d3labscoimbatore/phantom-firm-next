import { IoCallOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import Button from "../button/Button";
import "../contact/contact.css";
import Link from "next/link";

const Contact = ({ contactSection }) => {
  const { label, title, subtitle, socialMedia } = contactSection;

  const titleFirst = title.substring(0, 47);
  const titleSecond = title.substring(48, 54);

  return (
    <section id="contact" className="contact">
      <div className="contactContainer">
        <div className={label}>
          <Button text="Connect with Us" />
        </div>
        <div className="contactContent">
          <h2>
            {titleFirst}
            <span className="contactHello"> {titleSecond} </span>
          </h2>
          <p>{subtitle}</p>
        </div>
        <div className="btn">
          <Link href= {socialMedia[0].url}>
            <button className="callBtn">
              <span>
                <IoCallOutline />
              </span>
             {socialMedia[0].name}
            </button>
          </Link>
          <Link href= {socialMedia[1].url} >
            <button className="whatsappBtn">
              <span>
                <IoLogoWhatsapp />
              </span>
              {socialMedia[1].name}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
