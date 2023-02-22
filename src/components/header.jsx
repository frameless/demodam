import clsx from "clsx";
import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import "/styles/header.style.css";
import "/styles/alignment.css";
import DemodamLogo from "./demodamlogo.jsx";
import { Github, Slack } from "./icons.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header class="header alignment">
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
            <Link href="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/contributing" class="nav-link">
              Sluit je aan
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              Hackatons
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              Organisaties
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              Governance
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link href="https://github.com/frameless/demodam" class="nav-link" aria-label="github">
              <Github></Github>
            </Link>
            <Link href="https://samenorganiseren.slack.com/archives/C01S2QM81V4" class="nav-link" aria-label="Slack">
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
