"use client";

import logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import "../header/header.css";

const Header = () => {
  const [isbuttonClicked, setIsbuttonClicked] = useState(false);

  return (
    <header className="headerContainer">
      <div className="header container">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="phantom firm" width={160} height={48} />
          </Link>
        </div>
        <div>
          <ul className={`menus ${isbuttonClicked ? "menusActive" : ""}`}>
            <li>
              <Link
                href="#solutions"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
                FAQ&apos;s
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsbuttonClicked(!isbuttonClicked)}
              >
                <div className="contact lastItem">
                  <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://lottie.host/0de05f94-44bb-4613-9315-0b160a4699f7/IOuWHVJwcS.json"
                    style={{
                      width: "22rem",
                      height: "max-content",
                    }}
                  ></lottie-player>
                  <span className="contactText">Say Hello!</span>
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
