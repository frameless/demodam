import { Heading1, UnorderedList, UnorderedListItem } from "@utrecht/component-library-react";
import React from "react";
import { Link } from "./link";
import "/styles/contact.css";
import "/styles/alignment.css";
import "/styles/heading1size.css";

const ContributionContent = () => {
  return (
    <div className="contact-container alignment heading1size">
      <Heading1>Kom in contact met de Demodam Community</Heading1>
      <UnorderedList className="ul-list">
        <UnorderedListItem>
          Schrijf je in voor onze&nbsp;
          <Link
            className="contact-links"
            href="https://lists.publiccode.net/mailman/postorius/lists/demodam-discuss.lists.publiccode.net/"
          >
            maillijst{" "}
          </Link>
        </UnorderedListItem>
        <UnorderedListItem>
          Sluit je aan bij&nbsp;
          <Link
            className="contact-links"
            href="https://samenorganiseren.slack.com/join/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q#/shared-invite/email"
          >
            Common Ground op Slack{" "}
          </Link>
          en de Demodam kanalen.
        </UnorderedListItem>
        <UnorderedListItem>
          <Link className="contact-links" href="https://twitter.com/Demodam_cg">
            Twitter{" "}
          </Link>
        </UnorderedListItem>

        <UnorderedListItem>
          <Link className="contact-links" href="https://www.linkedin.com/company/demodam">
            LinkedIn{" "}
          </Link>
        </UnorderedListItem>
      </UnorderedList>
    </div>
  );
};

export default ContributionContent;
