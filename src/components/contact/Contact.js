import { IoCallOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import Button from "../button/Button";
import "../contact/contact.css";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="label">
          <Button text="Connect with Us" />
        </div>
        <div className="contactContent">
          <h3>
            Reach out to us for any queries, or just to say <span className="contactHello">hello!</span>
          </h3>
          <p>
            Drop us a line and lets turn your ideas into reality! Whether its a
            question, collaboration, or just a friendly chat, we are all ears
          </p>
        </div>
        <div className="btn">
          <Link href="tel:7871878878">
            <button className="callBtn">
              <span>
                <IoCallOutline />
              </span>
              Call
            </button>
          </Link>
          <Link href="https://wa.me/7871878878">
            <button className="whatsappBtn">
              <span>
                <IoLogoWhatsapp />
              </span>
              Whatsapp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
