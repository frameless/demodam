import { Heading1, Heading3 } from "@utrecht/component-library-react";
import * as React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <hgroup className="container">
        <Heading1 className="heading1">Demodam</Heading1>
        <br />
        <Heading3 className="heading3">Een digitale gemeente gebouwd op open source commonground componenten</Heading3>
        <br />
        <p className="content-hero">
          Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er
          beschikbaar zijn voor gemeenten.
        </p>
        <br />
        <p>
          <a
            aria-label="Link naar informatie voor demodam"
            href="https://commonground.nl/blog/view/6c422c0a-e541-41c8-8261-9c8bc90f4d87/doe-mee-met-demodam-de-common-ground-showcase-website"
            className="lowerlink"
          >
            Lees hier meer over Demodam
          </a>
        </p>
      </hgroup>
      <p>
        <img
          src={require("./hero.png").default}
          width="400"
          className="imghero"
          alt="artistieke illustratie van vrouw die naar huizen en een boom kijkt"
        />
      </p>
    </div>
  );
};

export default Hero;
