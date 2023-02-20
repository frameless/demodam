import * as React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <>
      <h1 className="timelineheading">Tijdlijn</h1>
      <section className="timeline">
        <div className="containert left">
          <section className="textbox">
            <hgroup>
              <p className="datum">Juli 2021</p>
              <h3 style={{ margin: "1rem 0px 0.75rem" }}>Innovatiesubsidie toegekend</h3>
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
              <h3 style={{ margin: "1rem 0px 0.75rem" }}>Eerste demodam hackathon</h3>
            </hgroup>
            <p>Samen werken aan een commonground etalage</p>
            <br />
            <a href="#">Informatie en inschrijven</a>
          </section>
        </div>

        <div className="containert left">
          <section className="textbox">
            <hgroup>
              <p className="datum">24 Juni 2021 13:00</p>
              <h3 style={{ margin: "1rem 0px 0.75rem" }}>Tweede demodam hackathon</h3>
            </hgroup>
            <p>Onboarding en planning</p>
            <br />
            <a href="#">Informatie en inschrijven</a>
          </section>
        </div>

        <div className="containert right">
          <section className="textbox">
            <hgroup>
              <p className="datum">Juli 2021</p>
              <h3 style={{ margin: "1rem 0px 0.75rem" }}>Kick-off Demodam</h3>
            </hgroup>
            <p>Lancering van Demodam</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Timeline;
