import { SkipLink } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import Timeline from "../components/Timeline";
import Blackbar from "../components/blackbar.jsx";
import Content from "../components/content.jsx";
import Header from "../components/header.jsx";
import "./index.css";
import "@utrecht/design-tokens/dist/index.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/400-italic.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/700-italic.css";

const IndexPage = () => {
  return (
    <>
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
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="nl" dir="ltr" />
    <meta charset="utf-8" />
    <title>Home Page — Demodam</title>
  </>
);
