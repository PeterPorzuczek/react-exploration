import React, { Component } from "react";
import Page from "../../app/pages/Page";
import Beers from "../../app/containers/Beers";
import withScroll from "../../app/components/Scroll";

const BeersWithScrollPagination = withScroll(Beers, true);

class Home extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => "Home";

  pageMeta = () => [{ name: "description", content: "Home page" }];

  pageLink = () => [];

  render() {
    return (
      <Page {...this.getMetaData()}>
        <BeersWithScrollPagination title="" />
      </Page>
    );
  }
}

export default Home;
