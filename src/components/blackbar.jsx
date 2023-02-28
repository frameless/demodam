import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "/styles/blackbar.css";

const Blackbar = () => {
  return (
    <section className="blackbar-section">
      <div className="blackbar-container">
        <div className="blackbar-image-block">
          <a href="#">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van conduction."
              src="../images/conduction.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="#">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van maykin media."
              src="../images/maykinmedia.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="#">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijf logo dimpact."
              src="../images/dimpact.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="#">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo kadaster"
              src="../images/kadaster.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
          <a href="#">
            <StaticImage
              height={"100%"}
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van foundation for public code"
              src="../images/foundation-for-public-code.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Blackbar;
