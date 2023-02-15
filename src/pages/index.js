import * as React from "react";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import Timeline from "../components/Timeline";
import Content from "../components/content.jsx";
import Header from "../components/header.jsx";
import "./index.css";
import "@utrecht/design-tokens/dist/index.css";

const IndexPage = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Hero />
        <Content />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="nl" dir="ltr" />
    <title>Home Page</title>
  </>
);
