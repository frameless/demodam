import * as React from "react";
import { useState } from "react";
import "/styles/header.style.css";
import DemodamLogo from "./demodamlogo.jsx";
import Icons from "./icons.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header class="header">
      {/* TODO: don't make this a link on the homepage itself */}
      <a href="#" aria-label="Homepage" class="headerLogo" tabIndex="1">
        <DemodamLogo role="img" aria-label="Logo van Demodam"></DemodamLogo>
      </a>
      <button
        tabIndex="0"
        aria-expanded="true"
        className={`nav-burger ${open ? "active" : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <nav class="headerNav">
        <ul
          className={`headerList ${open ? "active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <li class="nav-item">
            <a href="#" class="nav-link">
              home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              sluit je aan
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              hackatons
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              organisaties
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              governance
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              contact
            </a>
          </li>
          <Icons></Icons>
          <li class="nav-item">
            <ul>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  NL
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  EN
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
