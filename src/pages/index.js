import { Alert, Document, Heading1, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import * as React from "react";
import Header from "../components/header.js";
import "@utrecht/design-tokens/dist/index.css";

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <h1>Hello world!</h1>
      </main>
      <Document></Document>
      <Heading1></Heading1>
      <Alert></Alert>
      <Paragraph></Paragraph>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
