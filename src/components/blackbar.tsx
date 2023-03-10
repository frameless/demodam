import { Link } from "@utrecht/component-library-react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "/styles/blackbar.css";

const Blackbar = () => {
  return (
    <section className="blackbar-section">
      <div className="blackbar-container">
        <div className="blackbar-image-block">
          <Link href="https://conduction.nl/">
            <StaticImage
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van conduction."
              src="../../static/conduction.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
          <Link href="https://www.maykinmedia.nl/nl/">
            <StaticImage
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van maykin media."
              src="../../static/maykinmedia.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
          <Link href="https://www.dimpact.nl/">
            <StaticImage
              width={150}
              className="blackbar-image"
              alt="bedrijf logo dimpact."
              src="../../static/dimpact.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
          <Link href="https://www.kadaster.nl/">
            <StaticImage
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo kadaster"
              src="../../static/kadaster.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
          <Link href="https://publiccode.net/">
            <StaticImage
              width={150}
              className="blackbar-image"
              alt="bedrijfs logo van foundation for public code"
              src="../../static/foundation-for-public-code.png"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Blackbar;
