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
          <Image
            className="utrecht-img--scale-down blackbar-image"
            alt="illustratie van een persoon die een checklijst afvinkt"
            src={conduction}
          />
        </a>
        <a href="#">
          <Image
            className="utrecht-img--scale-down blackbar-image"
            alt="illustratie van een persoon die een checklijst afvinkt"
            src={maykinmedia}
          />
        </a>
        <a href="#">
          <Image
            className="utrecht-img--scale-down blackbar-image"
            alt="illustratie van een persoon die een checklijst afvinkt"
            src={dimpact}
          />
        </a>
        <a href="#">
          <Image
            className="utrecht-img--scale-down blackbar-image"
            alt="illustratie van een persoon die een checklijst afvinkt"
            src={kadaster}
          />
        </a>
        <a href="#">
          <Image
            className="utrecht-img--scale-down blackbar-image"
            alt="illustratie van een persoon die een checklijst afvinkt"
            src={foundation}
          />
        </a>
      </div>
    </div>
  </section>
);
export default Blackbar;
