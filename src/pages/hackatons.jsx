import * as React from "react";
import Footer from "../components/Footer.js";
import Content from "../components/hackatons-content.jsx";
import Header from "../components/header.jsx";
import "./index.css";
import "@utrecht/design-tokens/dist/index.css";
import "../fonts/sourcesanspro.ttf";

const Hackatons = () => {
  return (
    <>
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
    <html lang="nl" dir="ltr" />
    <meta charset="utf-8" />
    <title>Hackatons Page — Demodam</title>
  </>
);
