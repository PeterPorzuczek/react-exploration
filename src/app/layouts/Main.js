import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { title, meta, link } from "../../app/components/Headers";
import Page from "../../app/pages/Page";
import Application from "../../app/containers/Application";
import "../../assets/fonts/open-sans.css";
import "../../assets/css/main.css";

const Main = props => (
  <Page title={title} meta={meta} link={link} onScroll={this.handleScroll}>
    <Application {...props} />
  </Page>
);

export default Main;
