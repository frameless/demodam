import { SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Footer from "../components/footer.jsx";
import Content from "../components/governance-content.jsx";
import Header from "../components/header.jsx";
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
    <html lang="nl" dir="ltr" />
    <meta charset="utf-8" />
    <link id="icon" rel="icon" href="/demodamlogo.png" />
    <title>Governance | Demodam</title>
  </>
);
