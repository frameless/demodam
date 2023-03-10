import { SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Footer from "../components/footer";
import Content from "../components/hackatons-content";
import Header from "../components/header";
import "/styles/index.css";
import "@utrecht/design-tokens/dist/index.css";

const Hackatons = () => {
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

export default Hackatons;

export const Head = () => (
  <>
    <title>Hackatons | Demodam</title>
  </>
);
