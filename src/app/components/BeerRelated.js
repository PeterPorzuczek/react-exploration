import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Related from "../proptypes/related";
import BeerOverview from "../../app/components/BeerOverview";
import Loading from "../../app/components/Loading";
import "../../assets/css/components/BeerRelated.css";

const BeerRelatedUtil = beer => (
  <Col sm="6" md="5" key={beer.id}>
    <BeerOverview beer={beer} />
  </Col>
);

const BeerRelated = props =>
  props.related ? (
    <div>
      <Row>
        {props.related.ebc && props.related.ebc.length > props.count - 1
          ? [(() => <h5 key="other">&emsp;&emsp;You might also like:</h5>)()]
          : (() => <div />)()}
      </Row>
      <Row>
        {props.related.ebc && props.related.ebc.length > props.count - 1
          ? (() =>
              [...Array(props.count)].map((_, i) =>
                BeerRelatedUtil(props.related.ebc[i])
              ))()
          : (() => <Loading />)()}
      </Row>
    </div>
  ) : (
    (() => <Loading />)()
  );

BeerRelated.defaultProps = {
  related: {},
  count: 3
};

BeerRelated.propTypes = {
  related: Related,
  count: PropTypes.number
};

export default BeerRelated;
