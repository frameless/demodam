import { SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Content from "../components/contribution-content";
import Footer from "../components/footer";
import Header from "../components/header";
import "/styles/index.css";
import "@utrecht/design-tokens/dist/index.css";

const Contributing = () => {
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

export default Contributing;

export const Head = () => (
  <>
    <title>Contributing | Demodam</title>
  </>
);
