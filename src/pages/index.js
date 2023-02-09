import { Alert, Document, Heading1, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Header from "../components/header.js";
import Footer from "../components/Footer.js";
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
