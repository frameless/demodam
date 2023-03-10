import { SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Footer from "../components/footer";
import Content from "../components/governance-content";
import Header from "../components/header";
import "/styles/index.css";
import "@utrecht/design-tokens/dist/index.css";

const Governance = () => {
  return (
    <>
      <SkipLink href="#main">Naar de inhoud</SkipLink>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <main id="main">
            <Content />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Governance;

export const Head = () => (
  <>
    <title>Governance | Demodam</title>
  </>
);
