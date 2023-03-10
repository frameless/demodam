import { Document, SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Blackbar from "../components/blackbar.jsx";
import Content from "../components/content.jsx";
import Footer from "../components/footer.jsx";
import Header from "../components/header";
import Hero from "../components/hero.jsx";
import Timeline from "../components/timeline.jsx";
import "/styles/index.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/400-italic.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/700-italic.css";
import "../../build/css/index.css";

const IndexPage = () => {
  return (
    <Document className="demodam-theme">
      <SkipLink href="#main">Naar de inhoud</SkipLink>
      <div className="page-container">
        <Header />
        <Hero />
        <div className="content-wrap">
          <main id="main">
            <Blackbar />
            <Content />
            <Timeline />
          </main>
        </div>
        <Footer />
      </div>
    </Document>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Home Page | Demodam</title>
  </>
);
