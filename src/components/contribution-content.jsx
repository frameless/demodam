import { Heading1, Heading2, Paragraph } from "@utrecht/component-library-react";
import React from "react";
import { Link } from "./link";
import "/styles/alignment.css";
import "/styles/heading1size.css";

const ContributionContent = () => {
  return (
    <div className="alignment">
      <section className="contribute-section heading1size">
        <Heading1>CONTRIBUTING</Heading1>
        <Paragraph>Zo kun je deelnemen aan Demodam.</Paragraph>
      </section>
      <section className="contribute-section">
        <Heading2>Word lid van ons Slack-kanaal</Heading2>
        <Paragraph>
          <Link href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q">
            Word lid van de Common Ground Slack{" "}
          </Link>
          en sluit je aan bij de #Demodam-kanalen.
        </Paragraph>
      </section>
      <section className="contribute-section">
        <Heading2>Doe mee aan een hackathon</Heading2>
        <Paragraph>
          Tijdens{" "}
          <Link className="alignment-link" href="/hackatons">
            hackathons
          </Link>{" "}
          bouwen we samen verder aan Demodam volgens onze doelstellingen.
        </Paragraph>
      </section>
      <section className="contribute-section">
        <Heading2>Wees actief op Github</Heading2>
        <Paragraph>
          Schiet een issue of pull request in, enz. Bekijk de{" "}
          <Link href="https://github.com/demodam/demodam.org/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22">
            issues met label good first issue
          </Link>{" "}
          en de{" "}
          <Link href="https://github.com/demodam/demodam.org/labels/good%20first%20issue">
            issues met label good first issue
          </Link>{" "}
          om te beginnen.
        </Paragraph>
      </section>
      <section className="contribute-section">
        <Heading2>Vertel het Verder!</Heading2>
        <Paragraph>
          Voel je vrij om te bloggen, tweeten, posten over Demodam wanneer je maar wilt! We doen dit samen.
        </Paragraph>
      </section>
      <section className="contribute-section">
        <Heading2>Publiceer Common Ground-componenten op Demodam</Heading2>
        <Paragraph>
          Demodam is een showcase-website voor open source-componenten. Volg deze{" "}
          <Link href="https://github.com/demodam/demodam.org/blob/main/src/pages/join.md">
            stappen om componeneen op demodam te publiceren
          </Link>
          . Dat kan tijdens een hackathon, maar ook daarbuiten.
        </Paragraph>
      </section>
    </div>
  );
};

export default ContributionContent;
