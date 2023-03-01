import { SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Content from "../components/contribution-content.jsx";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import "/styles/index.css";
import "@utrecht/design-tokens/dist/index.css";

const Contributing = () => {
  return (
    <>
      <SkipLink className="demodam-skiplink" href="#main">
        Naar de inhoud
      </SkipLink>
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
    <html lang="nl" dir="ltr" />
    <meta charset="utf-8" />
    <title>Contributing Page — Demodam</title>
  </>
);
