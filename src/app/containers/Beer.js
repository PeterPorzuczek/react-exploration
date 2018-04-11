import React, { Component } from "react";
import $http from "../services/api";
import "../../assets/css/components/Beer.css";
import BeerDetails from "../../app/components/BeerDetails";

export default class Beers extends Component {
  state = this.getInitialState();

  getInitialState() {
    return { beer: [], related: {} };
  }

  componentDidMount() {
    this.updateBeerState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getInitialState();
    this.updateBeerState(nextProps);
  }

  componentWillUnmount() {
    $http.cancelAllRequests();
  }

  getBeer() {
    return this.state.beer.length > 0 ? this.state.beer[0] : {};
  }

  async getRelatedData(beer) {
    const relatedData = await $http.getRelated(beer.ibu, beer.abv, beer.ebc);
    relatedData &&
      this.setState({
        related: relatedData
      });
  }

  resetState() {
    this.setState(this.getInitialState());
  }

  async updateBeerState(props) {
    this.resetState();
    const beerData = await $http.getItem(props.match.params.id);
    beerData &&
      this.setState(
        {
          beer: beerData
        },
        () => {
          this.getRelatedData(this.getBeer());
        }
      );
  }

  render() {
    return (
      <BeerDetails
        beer={this.getBeer()}
        related={this.state.related}
        parentPath="/"
      />
    );
  }
}
