import { Heading1 } from "@utrecht/component-library-react";
import { Heading2 } from "@utrecht/component-library-react";
import { Link } from "gatsby";
import * as React from "react";
import "/styles/contribution.css";
import "/styles/alignment.css";

const ContributionContent = () => {
  return (
    <div className="contribute-container alignment">
      <section className="contribute-section">
        <Heading1>CONTRIBUTING</Heading1>
        <p>Zo kun je deelnemen aan Demodam.</p>
      </section>
      <section className="contribute-section">
        <Heading2>Word lid van ons Slack-kanaal</Heading2>
        <p>
          <Link
            className="contribute-link"
            href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q"
          >
            Word lid van de Common Ground Slack{" "}
          </Link>
          en sluit je aan bij de #Demodam-kanalen.
        </p>
      </section>
      <section className="contribute-section">
        <Heading2>Doe mee aan een hackathon</Heading2>
        <p>
          Tijdens{" "}
          <Link className="contribute-link" href="#">
            hackathons
          </Link>{" "}
          bouwen we samen verder aan Demodam volgens onze doelstellingen.
        </p>
      </section>
      <section className="contribute-section">
        <Heading2>Wees actief op Github</Heading2>
        <p>
          Schiet een issue of pull request in, enz. Bekijk de{" "}
          <Link
            className="contribute-link"
            href="https://github.com/demodam/demodam.org/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"
          >
            issues met label good first issue
          </Link>{" "}
          en de{" "}
          <Link className="contribute-link" href="https://github.com/demodam/demodam.org/labels/good%20first%20issue">
            issues met label good first issue
          </Link>{" "}
          om te beginnen.
        </p>
      </section>
      <section className="contribute-section">
        <Heading2>Vertel het Verder!</Heading2>
        <p>Voel je vrij om te bloggen, tweeten, posten over Demodam wanneer je maar wilt! We doen dit samen.</p>
      </section>
      <section className="contribute-section">
        <Heading2>Publiceer Common Ground-componenten op Demodam</Heading2>
        <p>
          Demodam is een showcase-website voor open source-componenten. Volg deze{" "}
          <Link className="contribute-link" href="https://github.com/demodam/demodam.org/blob/main/src/pages/join.md">
            stappen om componeneen op demodam te publiceren
          </Link>
          . Dat kan tijdens een hackathon, maar ook daarbuiten.
        </p>
      </section>
    </div>
  );
};

export default ContributionContent;
