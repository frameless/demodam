import { Heading1 } from "@utrecht/component-library-react";
import { Link } from "gatsby";
import * as React from "react";
import "/styles/contact.css";
import "/styles/alignment.css";

const ContributionContent = () => {
  return (
    <div className="contact-container alignment">
      <Heading1>Kom in contact met de Demodam Community</Heading1>
      <ul>
        <li>
          Schrijf je in voor onze&nbsp;
          <Link
            className="contact-links"
            href="https://lists.publiccode.net/mailman/postorius/lists/demodam-discuss.lists.publiccode.net/"
          >
            maillijst{" "}
          </Link>
        </li>
        <li>
          Sluit je aan bij&nbsp;
          <Link
            className="contact-links"
            href="https://samenorganiseren.slack.com/join/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q#/shared-invite/email"
          >
            Common Ground op Slack{" "}
          </Link>
          en de Demodam kanalen.
        </li>

        <li>
          <Link className="contact-links" href="https://twitter.com/Demodam_cg">
            Twitter{" "}
          </Link>
        </li>

        <li>
          <Link className="contact-links" href="https://www.linkedin.com/company/demodam">
            LinkedIn{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContributionContent;
