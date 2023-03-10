import { Heading1, Heading3, Link, Paragraph } from "@utrecht/component-library-react";
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
              <Paragraph className="datum">Juli 2021</Paragraph>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Innovatiesubsidie toegekend</Heading3>
            </hgroup>
            <Paragraph>
              Het ministerie van Binnenlandse Zaken en Koninkrijksrelaties heeft Demodam een subsidie van 150.000 euro
              toegekend.
            </Paragraph>
          </section>
        </div>

        <div className="containert right">
          <section className="textbox">
            <hgroup>
              <Paragraph className="datum">5 Juli tot 9 Juli 2021</Paragraph>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Eerste demodam hackathon</Heading3>
            </hgroup>
            <Paragraph>Samen werken aan een commonground etalage</Paragraph>
            <br />
            <Link
              href="https://www.meetup.com/nl-NL/Code-For-NL/events/278262253/"
              aria-label="Informatie en inschrijven voor 1ste demodam"
            >
              Informatie en inschrijven
            </Link>
          </section>
        </div>

        <div className="containert left">
          <section className="textbox">
            <hgroup>
              <Paragraph className="datum">24 Juni 2021 13:00</Paragraph>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Tweede demodam hackathon</Heading3>
            </hgroup>
            <Paragraph>Onboarding en planning</Paragraph>
            <br />
            <Link
              href="https://www.meetup.com/nl-NL/Code-For-NL/events/278475015/"
              aria-label="Informatie en inschrijven voor 2de demodam"
            >
              Informatie en inschrijven
            </Link>
          </section>
        </div>

        <div className="containert right">
          <section className="textbox">
            <hgroup>
              <Paragraph className="datum">Juli 2021</Paragraph>
              <Heading3 style={{ margin: "1rem 0px 0.75rem" }}>Kick-off Demodam</Heading3>
            </hgroup>
            <Paragraph>Lancering van Demodam</Paragraph>
          </section>
        </div>
      </section>
    </>
  );
};

export default Timeline;
