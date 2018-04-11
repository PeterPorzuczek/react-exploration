import React, { Component } from "react";
import Topbar from "../../app/components/Topbar";
import "../../assets/css/components/Navigation.css";

export default class Navigation extends Component {
  state = this.getInitialState();

  getInitialState() {
    return { top: true };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.top !== this.state.top && this.updateState(nextProps);
  }

  resetState() {
    this.setState(this.getInitialState());
  }

  async updateState(props) {
    this.setState({
      top: props.top
    });
  }

  render() {
    return (
      <div>
        <Topbar top={this.state.top} />
        <div className="navigation-spacer" />
      </div>
    );
  }
}
