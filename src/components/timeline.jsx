import { Heading1, Heading3 } from "@utrecht/component-library-react";
import * as React from "react";
import "/styles/timeline.css";

const Timeline = () => {
  return (
    <>
      <Heading1 className="timelineheading">Tijdlijn</Heading1>
      <section className="timeline">
        <div className="containert left">
          <section className="textbox">
            <hgroup>
              <p className="datum">Juli 2021</p>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Innovatiesubsidie toegekend</Heading3>
            </hgroup>
            <p>
              Het ministerie van Binnenlandse Zaken en Koninkrijksrelaties heeft Demodam een subsidie van 150.000 euro
              toegekend.
            </p>
          </section>
        </div>

        <div className="containert right">
          <section className="textbox">
            <hgroup>
              <p className="datum">5 Juli tot 9 Juli 2021</p>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Eerste demodam hackathon</Heading3>
            </hgroup>
            <p>Samen werken aan een commonground etalage</p>
            <br />
            <a href="#" style={{ color: "gray" }}>
              Informatie en inschrijven
            </a>
          </section>
        </div>

        <div className="containert left">
          <section className="textbox">
            <hgroup>
              <p className="datum">24 Juni 2021 13:00</p>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Tweede demodam hackathon</Heading3>
            </hgroup>
            <p>Onboarding en planning</p>
            <br />
            <a href="#" style={{ color: "gray" }}>
              Informatie en inschrijven
            </a>
          </section>
        </div>

        <div className="containert right">
          <section className="textbox">
            <hgroup>
              <p className="datum">Juli 2021</p>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Kick-off Demodam</Heading3>
            </hgroup>
            <p>Lancering van Demodam</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Timeline;
