"use client";

import "../header/header.css";
import logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  // Mobile View Menu

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="headerContainer">
      <div className="header">
        <div className="image">
          <Image src={logo} alt="phantom firm" width={160} height={48} />
        </div>
        <div onClick={toggleMobileMenu}>
          <ul className={`menus ${isMobileMenuOpen ? "menusActive" : ""}`}>
            <li>
              <Link href="#solutions">Solutions</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#faq">FAQ &apos;s</Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMobileMenu}>
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

          {/* Only on Mobile view - Hamburger Menu  */}
          <div className="hamburgerMenu" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
