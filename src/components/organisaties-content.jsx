import { Heading1 } from "@utrecht/component-library-react";
import { Link } from "gatsby";
import * as React from "react";
import "/styles/organisaties.css";
import "/styles/alignment.css";

const OrganisatiesContent = () => {
  return (
    <div className="organisaties-container alignment">
      <section>
        <Heading1>[concept] Demodam Organisaties</Heading1>
        <p>
          De volgende organisaties maken momenteel deel uit van het demodam-ecosysteem, als u zich wilt aansluiten bij
          het Demodam-ecosysteem, lees dan de&nbsp;
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            meedoen aan Demodam.{" "}
          </Link>
        </p>
      </section>

      <section className="container-lower">
        <div className="table-content-organisatie">
          <Heading1>Organisatie</Heading1>
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
          <p>n.a.</p>
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
          <Heading1>Showcasesite</Heading1>
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
          <p>n.a.</p>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            dimpact.demodam.nl{" "}
          </Link>
          <p>n.a.</p>
          <p>n.a.</p>
          <p>n.a.</p>
          <p>n.a.</p>
          <p>n.a.</p>
          <p>n.a.</p>
          <p>n.a.</p>
          <p>n.a.</p>
        </div>
      </section>
    </div>
  );
};

export default OrganisatiesContent;
