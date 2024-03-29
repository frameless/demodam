import { PageHeader, UnorderedList, UnorderedListItem } from "@utrecht/component-library-react";
import clsx from "clsx";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import DemodamLogo from "../images/demodamlogo.jsx";
import { Github, Slack } from "../images/icons.jsx";
import { Link } from "./link";
import "/styles/header.style.css";
import "/styles/alignment.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navButtonRef = useRef<HTMLButtonElement>(null);
  // TODO: Waar moet hij dan toch EventListener type vandaan halen?
  // eslint-disable-next-line no-undef
  const handleFocus = useCallback<EventListener>(
    (event) => {
      const isInsideNav =
        navRef.current?.contains(event.target as Node) || navButtonRef.current?.contains(event.target as Node);
      if (!isInsideNav) {
        setOpen(false);
      }
    },
    [navRef, navButtonRef]
  );

  useEffect(() => {
    //TODO: Remove eventlistener if element is not rendered anymore
    navRef.current?.ownerDocument.addEventListener("focus", handleFocus, true);
  }, []);

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <PageHeader className={`header alignment ${open ? "popup--open" : ""}`}>
      <div className="logo-button-head">
        <Link href="/" aria-label="Homepage" className="headerLogo">
          <DemodamLogo role="img" aria-label="Logo van Demodam"></DemodamLogo>
        </Link>
        <button
          ref={navButtonRef}
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
      <nav className={clsx("headerNav")} id="nav" ref={navRef} onKeyDownCapture={handleKeyDown}>
        <UnorderedList
          className={`headerList ${open ? "active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <UnorderedListItem className="nav-item">
            <Link href="/" className="nav-link" activeClassName="nav-link--active">
              Home
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/contributing" className="nav-link" activeClassName="nav-link--active">
              Sluit je aan
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/hackatons" className="nav-link" activeClassName="nav-link--active">
              Hackatons
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/organisaties" className="nav-link" activeClassName="nav-link--active">
              Organisaties
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/governance" className="nav-link" activeClassName="nav-link--active">
              Governance
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="/contact" className="nav-link" activeClassName="nav-link--active">
              Contact
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
            <Link href="https://github.com/frameless/demodam" className="nav-link" aria-label="github">
              <Github></Github>
            </Link>
          </UnorderedListItem>
          <UnorderedListItem className="nav-item">
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
