import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import "/styles/header.style.css";
import DemodamLogo from "./demodamlogo.jsx";
import { Github, Slack } from "./icons.jsx";
import clsx from "clsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header class="header">
      {/* TODO: don't make this a link on the homepage itself */}
      <div className="logo-button-head">
        <Link to="/" aria-label="Homepage" class="headerLogo" tabIndex="1">
          <DemodamLogo role="img" aria-label="Logo van Demodam"></DemodamLogo>
        </Link>
        <button
          aria-expanded={open ? "true" : "false"}
          aria-controls="nav"
          className={`nav-burger ${open ? "active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
      <nav class={clsx("headerNav", open && "headerNav--expanded")} id="nav">
        <ul
          className={`headerList ${open ? "active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <li class="nav-item">
            <Link href="#" class="nav-link">
              home
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              sluit je aan
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              hackatons
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              organisaties
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              governance
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              contact
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link" aria-label="github">
              <Github></Github>
            </Link>
            <Link href="#" class="nav-link" aria-label="Slack">
              <Slack></Slack>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link" aria-label="verandert pagina naar nederlands" hrefLang="nl" lang="nl">
              NL
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link" aria-label="changes page to english" hrefLang="en" lang="en">
              EN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
