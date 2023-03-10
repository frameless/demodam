import { SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Content from "../components/contact-content";
import Footer from "../components/footer";
import Header from "../components/header";
import "/styles/index.css";
import "@utrecht/design-tokens/dist/index.css";

const IndexPage = () => {
  return (
    <>
      <SkipLink href="#main">Naar de inhoud</SkipLink>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <main id="main"></main>
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Contact | Demodam</title>
  </>
);
