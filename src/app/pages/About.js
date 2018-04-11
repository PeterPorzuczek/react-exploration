import React, { Component } from "react";
import Page from "../../app/pages/Page";
import AboutContainer from "../../app/containers/About";

class About extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => "About";

  pageMeta = () => [{ name: "description", content: "About page" }];

  pageLink = () => [];

  render() {
    return (
      <Page {...this.getMetaData()}>
        <AboutContainer {...this.props} />
      </Page>
    );
  }
}

export default About;
