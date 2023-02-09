import * as React from "react";
import Footer from "../components/Footer.js";
import Header from "../components/header.js";
import "./index.css";
import "@utrecht/design-tokens/dist/index.css";

const IndexPage = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
