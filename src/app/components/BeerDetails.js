import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Beer from "../proptypes/beer";
import Related from "../proptypes/related";
import BeerRelated from "../../app/components/BeerRelated";
import Loading from "../../app/components/Loading";
import ImageLoading from "../../app/components/ImageLoading";
import "../../assets/css/components/BeerDetails.css";

const BeerDetailsUtil = props =>
  props.beer.name ? (
    <div className="pb-5">
      <h1>{props.beer.name}</h1>
      <h3>{props.beer.tagline}</h3>
      <p>
        <b>IBU:</b> {props.beer.ibu}&emsp;
        <b> ABV:</b> {props.beer.abv}%&emsp;
        <b> EBC:</b> {props.beer.ebc}&emsp;
      </p>
      <p>{props.beer.description}</p>
      <h4>Brewer tips:</h4>
      <p>{props.beer.brewers_tips}</p>
    </div>
  ) : (
    (() => <Loading />)()
  );

const BeerDetails = props =>
  props.beer ? (
    <div className="beer-details__content">
      <div className="beer-details__content--close">
        <Link to={props.parentPath}>
          <Button className="warning">Close</Button>
        </Link>
      </div>
      <Container>
        <Row>
          <Col md="4" className="">
            <ImageLoading
              shownClass={
                `beer-details__content--img-shown ` +
                `img-responsive-center      `
              }
              imageUrl={props.beer.image_url}
            />
          </Col>
          <Col>
            <BeerDetailsUtil {...props} />
            <BeerRelated related={props.related} count={3} />
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    (() => <Loading />)()
  );
BeerDetails.defaultProps = {
  beer: {},
  related: {},
  parentPath: ""
};

BeerDetails.propTypes = {
  beer: Beer,
  related: Related,
  parentPath: PropTypes.string
};

export default BeerDetails;
