import React, { Component } from "react";

const withScroll = (SomeComponent, paginate) =>
  class Scroll extends Component {
    constructor(props) {
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
    }

    state = this.getInitialState(paginate);

    getInitialState(paginateEnabled) {
      const state = { bottom: false, top: true };
      paginateEnabled && Object.assign(state, { limit: 20, page: 1 });
      return state;
    }

    componentDidMount() {
      this.reassignScrollHandlerToWindow(true);
    }

    componentWillUnmount() {
      this.reassignScrollHandlerToWindow(false);
    }

    reassignScrollHandlerToWindow(assign) {
      return assign
        ? window.addEventListener("scroll", this.handleScroll)
        : window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
      const scrollAtTop = window.pageYOffset < 250;
      const scrollAtBottom =
        window.innerHeight + window.pageYOffset + 20 >=
        document.body.scrollHeight;
      this.updateState(scrollAtBottom, scrollAtTop);
      paginate && scrollAtBottom && this.loadOnScrollBottomWithPagination();
    }

    updateState(bottom, top) {
      this.setState({
        bottom,
        top
      });
    }

    loadOnScrollBottomWithPagination() {
      this.setState({
        page: this.state.page + 1
      });
    }

    render() {
      return <SomeComponent {...this.state} {...this.props} />;
    }
  };

export default withScroll;
