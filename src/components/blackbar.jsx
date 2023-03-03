import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "/styles/blackbar.css";

const Blackbar = () => {
  return (
    <section className="blackbar-section">
      <div className="blackbar-container">
        <div className="blackbar-image-block">
          <a href="https://conduction.nl/">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van conduction."
              src="/conduction.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="https://www.maykinmedia.nl/nl/">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van maykin media."
              src="/maykinmedia.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="https://www.dimpact.nl/">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijf logo dimpact."
              src="/dimpact.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="https://www.kadaster.nl/">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo kadaster"
              src="/kadaster.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="https://publiccode.net/">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van foundation for public code"
              src="/foundation-for-public-code.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Blackbar;
