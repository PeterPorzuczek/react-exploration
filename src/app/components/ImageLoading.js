import React, { Component } from "react";
import Loading from "../../app/components/Loading";
import "../../assets/css/components/ImageLoading.css";

class ImageLoading extends Component {
  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageFailed = this.handleImageFailed.bind(this);
  }

  state = this.getInitialState();

  getInitialState() {
    return {
      imageStatus: "loading",
      load: false,
      showStyle: this.showIfLoaded(false)
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.imageUrl !== this.props.imageUrl && this.resetState();
  }

  handleImageLoaded() {
    this.setState({
      imageStatus: "loaded",
      load: true,
      showStyle: this.showIfLoaded(true)
    });
  }

  handleImageFailed() {
    this.setState({
      imageStatus: "fail",
      load: false,
      showStyle: this.showIfLoaded(false)
    });
  }

  resetState() {
    this.setState(this.getInitialState());
  }

  showIfLoaded(loaded) {
    return loaded ? this.props.shownClass : "img-hidden";
  }

  render() {
    return (
      <div>
        <img
          src={this.props.imageUrl}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageFailed}
          className={this.state.showStyle}
          alt={`img-${this.state.imageStatus}`}
        />
        {!this.state.load && <Loading />}
      </div>
    );
  }
}
ImageLoading.defaultProps = {
  shownClass: "default-img-shown"
};

export default ImageLoading;
