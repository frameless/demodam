import * as React from "react";
import "./header.style.css";
import Icons from "./icons.jsx";
import DemodamLogo from "./demodamlogo.jsx";

const Header = () => (
  <header lang="nl">
    <nav>
      <a href="#">
        <DemodamLogo></DemodamLogo>
      </a>
      <ul>
        <li>
          <a href="#">logo websites</a>
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
        <Icons></Icons>
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
