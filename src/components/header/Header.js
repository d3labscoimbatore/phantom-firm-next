"use client";

import logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import "../header/header.css";

const Header = ({ headerSection }) => {
  const { navigationMenu, lottiePlayerURL } = headerSection;

  const [isbuttonClicked, setIsbuttonClicked] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  },[]);

  return (
    <header className="headerContainer">
      <div className="header container">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="phantom firm" width={160} height={"auto"} />
          </Link>
        </div>
        <div>
          <ul className={`menus ${isbuttonClicked ? "menusActive" : ""}`}>
            <li onClick={() => setIsbuttonClicked(!isbuttonClicked)}>
                <Link href="#solutions" target="_blank" >{navigationMenu[0]}</Link>
            </li>
            <li onClick={() => setIsbuttonClicked(!isbuttonClicked)}>
                <Link href="#about" target="_blank">{navigationMenu[1]}</Link>
            </li>
            <li onClick={() => setIsbuttonClicked(!isbuttonClicked)}>
                <Link href="#faq" target="_blank">{navigationMenu[2]}</Link>
            </li>
            <li onClick={() => setIsbuttonClicked(!isbuttonClicked)}>
                <Link href="#contact" target="_blank">
                  <div className="contact lastItem">
                    <lottie-player
                      ref={ref}
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

          {/* Hamburger Menu for Mobile Device  */}
          <button
            className="hamburgerMenu"
            onClick={() => setIsbuttonClicked(!isbuttonClicked)}
          >
            {isbuttonClicked ? (
              <IoClose className="hamburgerMenuIcon" />
            ) : (
              <IoMenu className="hamburgerMenuIcon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
