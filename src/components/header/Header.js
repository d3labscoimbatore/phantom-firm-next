"use client";

import logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import "../header/header.css";

const Header = ({ headerSection }) => {
  const { navigationMenu, navigationLinks, lottiePlayerURL } = headerSection;

  const [isbuttonClicked, setIsbuttonClicked] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <header className="headerContainer">
      <div className="header container">
        <div className="logo">
          <Link href="/"  >
            <Image src={logo} alt="phantom firm" width={160} height={48} />
          </Link>
        </div>
        <div>
          <ul className={`menus ${isbuttonClicked ? "menusActive" : ""}`}>
            <li>
              <Link
                href= "/#solutions"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
                {navigationMenu[0]}
              </Link>
            </li>
            <li>
              <Link
                href= "/#about"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
                {navigationMenu[1]}
              </Link>
            </li>
            <li>
              <Link
                href=  "/#faq"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
                {navigationMenu[2]}
              </Link>
            </li>
            <li>
              <Link
                href=  "/#contact"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
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

