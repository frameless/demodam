import { Heading1 } from "@utrecht/component-library-react";
import { Heading2 } from "@utrecht/component-library-react";
import { Link } from "gatsby";
import * as React from "react";

const ContributionContent = () => {
  return (
    <div>
      <section>
        <Heading1>CONTRIBUTING</Heading1>
        <p>Zo kun je deelnemen aan Demodam.</p>
      </section>
      <section>
        <Heading2>Word lid van ons Slack-kanaal</Heading2>
        <p>
          <Link href="https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q">
            Word lid van de Common Ground Slack{" "}
          </Link>
          en sluit je aan bij de #Demodam-kanalen.
        </p>
      </section>
      <section>
        <Heading2>Doe mee aan een hackathon</Heading2>
        <p>
          Tijdens <Link href="#">hackathons</Link> bouwen we samen verder aan Demodam volgens onze doelstellingen.
        </p>
      </section>
      <section>
        <Heading2>Wees actief op Github</Heading2>
      </section>
      <section>
        <Heading2>Doe mee aan een hackathon</Heading2>
      </section>
      <section>
        <Heading2>Doe mee aan een hackathon</Heading2>
      </section>
    </div>
  );
};

export default ContributionContent;
