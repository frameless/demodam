import * as React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <section className="timeline">
      <h2>Tijdlijn</h2>
      <div className="container right-container">
        <section className="textbox">
          <hgroup>
            <h3>Innovatiesubsidie toegekend</h3>
            <p>Juli 2021</p>
          </hgroup>
          <p>
            Het ministerie van Binnenlandse Zaken en Koninkrijksrelaties heeft Demodam een subsidie van 150.000 euro
            toegekend.
          </p>
          <p>
            {" "}
            <img src={require("./timelineicon.png").default} width="30" className="" alt="Timeline icoontje" />
          </p>
        </section>
      </div>

      <div className="container left-container">
        <img src={require("./timelineicon.png").default} width="30" className="" alt="Timeline icoontje" />
        <section className="textbox">
          <small>5 Juli tot 9 Juli 2021</small>
          <h3>Eerste demodam hackathon</h3>
          <p>Samen werken aan een commonground etalage</p>
        </section>
      </div>

      <div className="container right-container">
        <div className="textbox">
          <hgroup>
            <h3>Tweede demodam hackathon</h3>
            <p>24 Juni 2021 13:00</p>
          </hgroup>
          <p>Onboarding en planning</p>
          <p>
            <img src={require("./timelineicon.png").default} width="30" className="" alt="Timeline icoontje" />
          </p>
        </div>
      </div>

      <div className="container left-container">
        <section className="textbox">
          <hgroup>
            <h2>Kick-off Demodam</h2>
            <p>Juli 2021</p>
          </hgroup>
          <p>Lancering van Demodam</p>
          <p>
            <img src={require("./timelineicon.png").default} width="30" className="" alt="Timeline icoontje" />
          </p>
        </section>
      </div>
    </section>
  );
};

export default Timeline;
