import * as React from "react";
import "./logo.jsx";
import "./header.style.css";
import Logo from "./logo.jsx";

const Header = () => (
  <header lang="nl">
    <nav>
      <ul>
        <li>
          <a href="#">
            <Logo>
              <svg viewBox="0 0 1000 1000">
                <rect fill="currentColor" height="1000" width="1000" x="0" y="0" />
              </svg>
            </Logo>
          </a>
        </li>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">sluit je aan</a>
        </li>
        <li>
          <a href="#">hackatons</a>
        </li>
        <li>
          <a href="#">organisaties</a>
        </li>
        <li>
          <a href="#">governance</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <a href="#">github logo</a>
        </li>
        <li>
          <a href="#">slack logo</a>
        </li>
        <li>
          <ul>
            <li>
              <a href="#">NL</a>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
