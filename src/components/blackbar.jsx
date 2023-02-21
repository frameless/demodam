import { Image } from "@utrecht/component-library-react";
import * as React from "react";
import conduction from "../images/conduction.png";
import "/styles/blackbar.css";

const Blackbar = () => (
  <section className="blackbar-section">
    <div className="blackbar-container">
      <div className="blackbar-image-block">
        <a>
          <Image
            className="utrecht-img--scale-down"
            alt="illustratie van een persoon die een checklijst afvinkt"
            src={conduction}
          />
        </a>
        <a>
          <Image />
        </a>
        <a>
          <Image />
        </a>
        <a>
          <Image />
        </a>
      </div>
    </div>
  </section>
);
export default Blackbar;
