import { UnorderedList, UnorderedListItem } from "@utrecht/component-library-react";
import * as React from "react";
import "/styles/footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="containerf">
        <div className="row">
          <UnorderedList className="list-unstyled">
            <UnorderedListItem>Home</UnorderedListItem>
            <UnorderedListItem>Sluit je aan</UnorderedListItem>
            <UnorderedListItem>Hackathons</UnorderedListItem>
            <UnorderedListItem>Organisaties</UnorderedListItem>
            <UnorderedListItem>Governance</UnorderedListItem>
            <UnorderedListItem>Contact</UnorderedListItem>
          </UnorderedList>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
