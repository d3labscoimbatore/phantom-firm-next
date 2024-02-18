"use client"

import logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import "../header/header.css";

const Header = ({ headerSection }) => {
  const { navigationMenu, lottiePlayerURL } = headerSection;

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
            <li onClick={() => setIsbuttonClicked(!isbuttonClicked)}>
                <Link href="#solutions">
                  <p>{navigationMenu[0]}</p>
                </Link>
            </li>
            <li onClick={() => setIsbuttonClicked(!isbuttonClicked)}>
                <Link href="#about">
                  <p>{navigationMenu[1]}</p>
                </Link>
            </li>
            <li onClick={() => setIsbuttonClicked(!isbuttonClicked)}>
                <Link href="#faq">
                  <p>{navigationMenu[2]}</p>
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
