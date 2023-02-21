import { Image } from "@utrecht/component-library-react";
import * as React from "react";
import conduction from "../images/conduction.png";
import dimpact from "../images/dimpact.png";
import foundation from "../images/foundation-for-public-code.png";
import kadaster from "../images/kadaster.png";
import maykinmedia from "../images/maykinmedia.png";
import "/styles/blackbar.css";

const Blackbar = () => (
  <section className="blackbar-section">
    <div className="blackbar-container">
      <div className="blackbar-image-block">
        <a href="#">
          <Image className="blackbar-image" alt="bedrijfs logo van conduction." src={conduction} />
        </a>
        <a href="#">
          <Image className="blackbar-image" alt="bedrijfs logo van maykin media." src={maykinmedia} />
        </a>
        <a href="#">
          <Image className="blackbar-image" alt="bedrijf logo dimpact." src={dimpact} />
        </a>
        <a href="#">
          <Image className="blackbar-image" alt="bedrijfs logo kadaster" src={kadaster} />
        </a>
        <a href="#">
          <Image className="blackbar-image" alt="bedrijfs logo van foundation for public code" src={foundation} />
        </a>
      </div>
    </div>
  </section>
);
export default Blackbar;
