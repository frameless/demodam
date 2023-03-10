import { Heading1, Heading3, Paragraph } from "@utrecht/component-library-react";
import React from "react";
import { Link } from "./link";
import "/styles/organisaties.css";
import "/styles/alignment.css";
import "/styles/heading1size.css";

const OrganisatiesContent = () => {
  return (
    <div className="organisaties-container alignment heading1size">
      <section>
        <Heading1>[concept] Demodam Organisaties</Heading1>
        <Paragraph>
          De volgende organisaties maken momenteel deel uit van het demodam-ecosysteem, als u zich wilt aansluiten bij
          het Demodam-ecosysteem, lees dan de&nbsp;
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            meedoen aan Demodam.{" "}
          </Link>
        </Paragraph>
      </section>

      <section className="container-lower">
        <div className="table-content-organisatie heading1size">
          <Heading3>Organisatie</Heading3>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Conduction{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Maykin Media{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Kadaster{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Foundation for public code{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Dimpact{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Wigo4it{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            VNG-Realisatie{" "}
          </Link>
          <Paragraph>n.a.</Paragraph>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            VrijBRP{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            NL Design System{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Open ZaakBrug{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            NLX{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Kodision{" "}
          </Link>
        </div>

        <div className="table-content-showcase">
          <Heading3>Showcasesite</Heading3>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            conduction.demodam.nl{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            maykinmedia.demodam.nl{" "}
          </Link>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            kadaster.demodam.nl{" "}
          </Link>
          <Paragraph>n.a.</Paragraph>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            dimpact.demodam.nl{" "}
          </Link>
          <Paragraph>n.a.</Paragraph>
          <Paragraph>n.a.</Paragraph>
          <Paragraph>n.a.</Paragraph>
          <Paragraph>n.a.</Paragraph>
          <Paragraph>n.a.</Paragraph>
          <Paragraph>n.a.</Paragraph>
          <Paragraph>n.a.</Paragraph>
          <Paragraph>n.a.</Paragraph>
        </div>
      </section>
    </div>
  );
};

export default OrganisatiesContent;
