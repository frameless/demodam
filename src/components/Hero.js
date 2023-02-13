import * as React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="herotext">
      <h1>Demodam</h1>
      <h5>Een digitale gemeente gebouwd op open source commonground componenten</h5>
      <p>
        Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er
        beschikbaar zijn voor gemeenten.
      </p>
      <p>
        <a
          href="https://commonground.nl/blog/view/6c422c0a-e541-41c8-8261-9c8bc90f4d87/doe-mee-met-demodam-de-common-ground-showcase-website"
          style={{ color: "black" }}
        >
          Lees hier meer over Demodam
        </a>
      </p>
      <img src={require("./hero.png").default} width="400" className="" alt="a" />
    </div>
  );
};

export default Hero;