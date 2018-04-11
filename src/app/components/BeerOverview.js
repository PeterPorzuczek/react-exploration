import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Beer from "../proptypes/beer";
import Loading from "../../app/components/Loading";
import ImageLoading from "../../app/components/ImageLoading";
import "../../assets/css/components/BeerOverview.css";

const BeerOverview = props =>
  props.beer ? (
    <div className="beer-overview">
      <Link to={`/beers/${props.beer.id}`}>
        <Card className="beer-overview-card">
          <Row className="beer-overview-card__content mt-auto">
            <Col md="12" sm="12" lg="3">
              <ImageLoading
                shownClass={
                  `beer-overview-card__content--img-shown ` +
                  `img-responsive-center`
                }
                imageUrl={props.beer.image_url}
              />
            </Col>
            <Col md="12" sm="12" lg="9">
              <div className="beer-overview-card--bodywrap">
                <CardBody className="beer-overview-card--body">
                  <CardTitle className="beer-overview-card--body-title">
                    {props.beer.name}
                  </CardTitle>
                  <div className="beer-overview-card--body-separator" />
                  <CardText className="beer-overview-card--body-text">
                    {props.beer.tagline}
                  </CardText>
                </CardBody>
              </div>
            </Col>
          </Row>
        </Card>
      </Link>
    </div>
  ) : (
    (() => <Loading />)()
  );
BeerOverview.defaultProps = {
  beer: {}
};

BeerOverview.propTypes = {
  beer: Beer
};

export default BeerOverview;
