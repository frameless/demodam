import * as React from "react";
import "./header.style.css";

const Header = () => (
  <header lang="nl">
    <nav>
      <ul>
        <li>
          <a href="#">logo website</a>
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
