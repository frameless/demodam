import { Heading1, Link, Paragraph } from "@utrecht/component-library-react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "/styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <hgroup className="container">
        <Heading1 className="heading1">Demodam</Heading1>
        <Paragraph className="heading3">
          Een digitale gemeente gebouwd op open source commonground componenten
        </Paragraph>
        <Paragraph className="content-hero">
          Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er
          beschikbaar zijn voor gemeenten.
        </Paragraph>
        <Paragraph>
          <Link
            aria-label="Link naar informatie voor demodam"
            href="https://commonground.nl/blog/view/6c422c0a-e541-41c8-8261-9c8bc90f4d87/doe-mee-met-demodam-de-common-ground-showcase-website"
            className="lowerlink"
          >
            Lees hier meer over Demodam
          </Link>
        </Paragraph>
      </hgroup>
      <Paragraph>
        <StaticImage
          objectFit="contain"
          className="imghero"
          src="../../static/hero.png"
          alt="artistieke illustratie van vrouw die naar huizen en een boom kijkt"
        />
      </Paragraph>
    </div>
  );
};

export default Hero;
