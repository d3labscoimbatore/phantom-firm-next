"use client";

import logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import "../header/header.css";

const Header = ({ headerSection }) => {
  const { navigationMenu, navigationLinks, lottiePlayerURL } = headerSection;

  return (
    <header className="headerContainer">
      <div className="header container">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="phantom firm" width={160} height={48} />
          </Link>
        </div>
        <div>
          <ul className={`menus`}>
            <li>
              <Link
                href= "#solutions"
               
              >
                {navigationMenu[0]}
              </Link>
            </li>
            <li>
              <Link
                href= "#about"
              
              >
                {navigationMenu[1]}
              </Link>
            </li>
            <li>
              <Link
                href= "faq"
              
              >
                {navigationMenu[2]}
              </Link>
            </li>
            <li>
              <Link
                href={navigationLinks[3]}
                
              >
                <div className="contact lastItem">
                  <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={lottiePlayerURL}
                    style={{
                      width: "22rem",
                      height: "max-content",
                    }}
                  ></lottie-player>
                  <span className="contactText"> {navigationMenu[3]} </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
