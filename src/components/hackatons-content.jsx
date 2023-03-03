import { Heading1, Paragraph } from "@utrecht/component-library-react";
import { Link } from "gatsby";
import * as React from "react";
import "/styles/alignment.css";

const ContributionContent = () => {
  return (
    <div className="alignment">
      <section className="hackatons-section">
        <Heading1>Demodam Hackathon III: 20-24 juni 2022</Heading1>
        <Paragraph>
          Demodam Hackathon III vindt plaats tijdens de Week van de (Digitale) Dienstverlening. Doe ook mee!{" "}
        </Paragraph>
        <Paragraph>
          <Link className="alignment-link" href="https://weekvandedienstverlening.pleio.nl/demodam">
            Alle informatie over Demodam Hackathon III
          </Link>
          .
        </Paragraph>
      </section>
      <section className="hackatons-section">
        <Heading1>Vorige Demodam Hackathons</Heading1>
        <ul>
          <li>
            Demodam Hackathon I: 5-9 juli 2021{" "}
            <Link
              className="alignment-link"
              href="https://docs.google.com/presentation/d/1ueLpnCIA06f05uuSTop8DU9olLb0M34iR_HrjsebRfI"
            >
              Informatie, programma and resultaten
            </Link>
            .
          </li>
          <li>
            Demodam Hackathon II: 1-5 november 2021{" "}
            <Link
              className="alignment-link"
              href="https://docs.google.com/presentation/d/1SJgPPEyf5I2tFjAzE0tRWqG64BC0LicFAnRUYPT4YQ4/edit#slide=id.Paragraph"
            >
              Informatie, programma and resultaten
            </Link>
            .
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContributionContent;