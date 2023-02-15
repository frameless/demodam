import * as React from "react";
import "/styles/header.style.css";
import DemodamLogo from "./demodamlogo.jsx";
import Icons from "./icons.jsx";
const Header = () => (
  <header class="header">
    <nav class="headerNav">
      {/* TODO: don't make this a link on the homepage itself */}
      <a href="#" aria-label="Homepage" class="headerLogo">
        <DemodamLogo role="img" aria-label="Logo van Demodam"></DemodamLogo>
      </a>
      <ul class="headerList">
        <li class="nav-item">
          <a href="#" class="nav-item">
            home
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-item">
            sluit je aan
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-item">
            hackatons
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-item">
            organisaties
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-item">
            governance
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-item">
            contact
          </a>
        </li>
        <Icons></Icons>
        <li class="nav-item">
          <ul>
            <li class="nav-item">
              <a href="#" class="nav-item">
                NL
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-item">
                EN
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="nav-burger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
);
export default Header;
