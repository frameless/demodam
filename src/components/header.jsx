import * as React from "react";
import "/styles/header.style.css";
import DemodamLogo from "./demodamlogo.jsx";
import Icons from "./icons.jsx";
const Header = () => (
  <header lang="nl" class="header">
    <nav class="headerNav">
      <a href="#" class="headerLogo">
        <DemodamLogo></DemodamLogo>
      </a>
      <ul className="headerList">
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
