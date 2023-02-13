import * as React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="container right-container">
        <img src={require("./timelineicon.png").default} width="30" className="" alt="a" />
        <div className="textbox">
          <small>Juli 2021</small>
          <h2>Innovatiesubsidie toegekend</h2>
          <p>
            Het ministerie van Binnenlandse Zaken en Koninkrijksrelaties heeft Demodam een subsidie van 150.000 euro
            toegekend.
          </p>
        </div>
      </div>

      <div className="container left-container">
        <img src={require("./timelineicon.png").default} width="30" className="" alt="a" />
        <div className="textbox">
          <small>5 Juli tot 9 Juli 2021</small>
          <h2>Demodam hackathon</h2>
          <p>Samen werken aan een commonground etalage</p>
        </div>
      </div>

      <div className="container right-container">
        <img src={require("./timelineicon.png").default} width="30" className="" alt="a" />
        <div className="textbox">
          <small>24 Juni 2021 13:00</small>
          <h2>Demodam hackathon</h2>
          <p>Onboarding en planning</p>
        </div>
      </div>

      <div className="container left-container">
        <img src={require("./timelineicon.png").default} width="30" className="" alt="a" />
        <div className="textbox">
          <small>Juli 2021</small>
          <h2>Kick-off Demodam</h2>
          <p>Lancering van Demodam</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
