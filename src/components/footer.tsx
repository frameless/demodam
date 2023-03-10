import { Link, UnorderedList, UnorderedListItem } from "@utrecht/component-library-react";
import * as React from "react";
import "/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <UnorderedList className="list-unstyled">
          <UnorderedListItem>
            <Link href="/">Home</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="/contributing">Sluit je aan</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="/hackatons">Hackatons</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="/organisaties">Organisaties</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="/governance">Governance</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="/contact">Contact</Link>
          </UnorderedListItem>
        </UnorderedList>
      </div>
    </footer>
  );
};

export default Footer;
