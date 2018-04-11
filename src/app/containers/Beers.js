import React, { Component } from "react";
import $http from "../services/api";
import Items from "../../app/components/Items";
import BeerOverview from "../../app/components/BeerOverview";
import Loading from "../../app/components/Loading";

export default class Beers extends Component {
  state = this.getInitialState();

  getInitialState() {
    return { beers: [], loading: false, end: false };
  }

  componentDidMount() {
    this.updateBeersState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.page !== this.props.page &&
      !this.state.end &&
      this.updateBeersState(nextProps);
  }

  componentWillUnmount() {
    $http.cancelAllRequests();
  }

  resetState() {
    this.setState(this.getInitialState());
  }

  async updateBeersState(props) {
    this.updateLoading(true);
    const pageData = await $http.getPage(props.page, props.limit);
    pageData && pageData.length === 0 && this.updateEnd(true);
    pageData &&
      this.setState({
        beers: this.state.beers.concat(pageData),
        loading: false
      });
  }

  updateEnd(val) {
    this.setState({ end: val });
  }

  updateLoading(val) {
    this.setState({ loading: val });
  }

  render() {
    const listItems = this.state.beers.map(beer => (
      <BeerOverview beer={beer} key={beer.id} />
    ));
    return (
      <div>
        <div>
          <h2 className="text-center">{this.props.title}</h2>
        </div>
        <Items list={listItems} columns={4} />
        {this.state.loading && <Loading />}
        {this.state.end && <h4 className="text-center">All data loaded</h4>}
      </div>
    );
  }
}
