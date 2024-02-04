import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.jpg";
import "../footer/footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";

const Footer = ({ footerSection }) => {
  const { contactDetails, copyright, policies } = footerSection;

  const address = contactDetails.address;
  const addressFirst = address.address.substring(0, 44);
  const addressSecond = address.address.substring(45, 55);
  const addressThird = address.address.substring(56, 73);
  const contact = contactDetails.contact;

  return (
    <>
      <section className="footerSection">
        <div className="footerTop container">
          <div className="footerTopLogo">
            <Image src={logo} width={162} height={50} alt="Phantom Firm" />
          </div>
          <div className="footerTopRight">
            <div className="address">
              <div className="addressTitle">
                <Link
                  href="https://www.google.com/maps/place/12,+13,+Sowripalayam+Rd,+Chinna+Ayyavu+Thevar+Layout,+Udayampalayam,+Coimbatore,+Tamil+Nadu+641028/@11.0075752,76.9970633,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba859d1d1748485:0x7c1edae979d0c1f7!8m2!3d11.0075699!4d76.9996382?entry=ttu"
                  target="_blank"
                >
                  <h3 className="contactTitle"> {address.title} </h3>
                  <div className="locationIcon">
                    <span></span>
                    <button type="button" disabled>
                      <TbLocationFilled />
                    </button>
                  </div>
                </Link>
              </div>
              <p>
                {addressFirst} <br /> {addressSecond}
                <br /> {addressThird}
              </p>
            </div>
            <div className="Footercontact">
              <h3 className="contactTitle"> {contact.title}</h3>
              <div className="contactDetails">
                <div className="phone">
                  <p>{contact.phone.title}</p>
                  <Link href="tel:7871878878">+91 {contact.phone.number}</Link>
                </div>
                <div className="email">
                  <p>{contact.email.title}</p>
                  <Link
                    href="mailto:phantomfirmco@gmail.com"
                    className="contactLinks"
                  >
                    {contact.email.mailID}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footerBottom">
        <div className="footerBottomContainer container">
          <div className="footerBottomLeft">
            <Link href={policies.termsOfService.URL}>
              {policies.termsOfService.title}{" "}
            </Link>
            <Link href={policies.privacyPolicy.URL}>
              {policies.privacyPolicy.title}
            </Link>
            <Link href={policies.antiSpamPolicy.URL}>
              {policies.antiSpamPolicy.title}
            </Link>
          </div>
          <div className="footerBottomCenter">
            <Link href="#">
              <RiFacebookFill />
            </Link>
            <Link href="#">
              <RiTwitterXFill />
            </Link>
            <Link href="#">
              <RiLinkedinFill />
            </Link>
            <Link href="https://www.instagram.com/phantom_firm/">
              <RiInstagramFill />
            </Link>
          </div>
          <div className="footerBottomRight">{copyright}</div>
        </div>
      </section>
    </>
  );
};

export default Footer;
