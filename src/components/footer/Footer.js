import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.jpg";
import "../footer/footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="footerSection">
        <div className="footerTop">
          <div className="footerTopLogo">
            <Image src={logo} width={162} height={50} alt="Phantom Firm" />
          </div>
          <div className="footerTopRight">
            <div className="address">
              <div className="addressTitle">
                <Link
                  href="https://maps.app.goo.gl/PYQggKEPxomuPYcJ6"
                  target="_blank"
                >
                  <h4 className="contactTitle">Visit Us</h4>
                  <div className="locationIcon">
                    <span></span>
                    <span>
                      <TbLocationFilled />
                    </span>
                  </div>
                </Link>
              </div>
              <p>
                No.12,13, Sowripalayam Road, Ramanathapuram, <br /> Coimbatore,
                <br /> Tamilnadu, 641045
              </p>
            </div>
            <div className="Footercontact">
              <h4 className="contactTitle">Contact Us</h4>
              <div className="contactDetails">
                <div className="phone">
                  <p>Phone</p>
                  <Link href="tel:7871878878" className="contactLinks">
                    +91 78718 78878
                  </Link>
                </div>
                <div className="email">
                  <p>Email</p>
                  <Link
                    href="mailto:phantomfirmco@gmail.com"
                    className="contactLinks"
                  >
                    phantomfirmco@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomLeft">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Anti-spam Policy</Link>
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
          <Link href="#">
            <RiInstagramFill />
          </Link>
        </div>
        <div className="footerBottomRight">
          Copyright © 2024 Phantom Firm. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
