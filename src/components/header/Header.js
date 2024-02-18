"use client";

import logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import "../header/header.css";

const Header = ({ headerSection }) => {
  const { navigationMenu } = headerSection;

  return (
    <header className="headerContainer">
      <div className="header container">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="phantom firm" width={160} height={48} />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/#solutions">{navigationMenu[0]}</Link>
            </li>
            <li>
              <Link href="/#about">{navigationMenu[1]}</Link>
            </li>
            <li>
              <Link href="/#faq">{navigationMenu[2]}</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
