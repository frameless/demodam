import { Heading1, Paragraph, UnorderedList, UnorderedListItem } from "@utrecht/component-library-react";
import React from "react";
import { Link } from "./link";
import "/styles/alignment.css";
import "/styles/heading1size.css";

const ContributionContent = () => {
  return (
    <div className="alignment">
      <section className="hackatons-section heading1size">
        <Heading1>Demodam Hackathon III: 20-24 juni 2022</Heading1>
        <Paragraph>
          Demodam Hackathon III vindt plaats tijdens de Week van de (Digitale) Dienstverlening. Doe ook mee!{" "}
        </Paragraph>
        <Paragraph>
          <Link href="https://weekvandedienstverlening.pleio.nl/demodam">
            Alle informatie over Demodam Hackathon III
          </Link>
          .
        </Paragraph>
      </section>
      <section className="hackatons-section heading1size">
        <Heading1>Vorige Demodam Hackathons</Heading1>
        <UnorderedList>
          <UnorderedListItem>
            Demodam Hackathon I: 5-9 juli 2021{" "}
            <Link href="https://docs.google.com/presentation/d/1ueLpnCIA06f05uuSTop8DU9olLb0M34iR_HrjsebRfI">
              Informatie, programma and resultaten
            </Link>
            .
          </UnorderedListItem>
          <UnorderedListItem>
            Demodam Hackathon II: 1-5 november 2021{" "}
            <Link href="https://docs.google.com/presentation/d/1SJgPPEyf5I2tFjAzE0tRWqG64BC0LicFAnRUYPT4YQ4/edit#slide=id.Paragraph">
              Informatie, programma and resultaten
            </Link>
            .
          </UnorderedListItem>
        </UnorderedList>
      </section>
    </div>
  );
};

export default ContributionContent;
