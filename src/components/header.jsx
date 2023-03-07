import { PageHeader, UnorderedList, UnorderedListItem } from "@utrecht/component-library-react";
import clsx from "clsx";
import { useState } from "react";
import React from "react";
import DemodamLogo from "../images/demodamlogo.jsx";
import { Github, Slack } from "../images/icons.jsx";
import { Link } from "./link";
import "/styles/header.style.css";
import "/styles/alignment.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const hide = () => setOpen(false);
  const show = () => setOpen(true);

  return (
    <PageHeader className="header alignment">
      {/* TODO: don't make this a link on the homepage itself */}
      <div className="logo-button-head">
        <Link href="/" aria-label="Homepage" className="headerLogo">
          <DemodamLogo role="img" aria-label="Logo van Demodam"></DemodamLogo>
        </Link>
        <button
          aria-label="collapse menu navigation"
          aria-expanded={open ? "true" : "false"}
          aria-controls="nav"
          className={`nav-burger ${open ? "active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <nav focusIn={show} onFocus={hide} className={clsx("headerNav", open && "headerNav--expanded")} id="nav">
        <UnorderedList className={`headerList ${open ? "active" : ""}`} onClick={toggle}>
          <UnorderedListItem className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/contributing" className="nav-link">
              Sluit je aan
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/hackatons" className="nav-link">
              Hackatons
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/organisaties" className="nav-link">
              Organisaties
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/governance" className="nav-link">
              Governance
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="https://github.com/frameless/demodam" className="nav-link" aria-label="github">
              <Github></Github>
            </Link>
            <Link
              href="https://samenorganiseren.slack.com/archives/C01S2QM81V4"
              className="nav-link"
              aria-label="Slack"
            >
              <Slack></Slack>
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="#" className="nav-link" aria-label="verandert pagina naar nederlands" hrefLang="nl" lang="nl">
              NL
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="#" className="nav-link" aria-label="changes page to english" hrefLang="en" lang="en">
              EN
            </Link>
          </UnorderedListItem>
        </UnorderedList>
      </nav>
    </PageHeader>
  );
};
export default Header;
