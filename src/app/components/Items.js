import React from "react";
import { Row, Col } from "reactstrap";

const ItemsUtil = props => {
  const colsCount = props.columns;
  const rows = [...Array(Math.ceil(props.list.length / colsCount))];
  const listRows = rows.map((row, i) =>
    props.list.slice(i * colsCount, i * colsCount + colsCount)
  );
  // TODO make unique keys generation
  /* eslint-disable */ 
  const content = listRows.map((row, r) => (
    <Row className="w-100 pl-5" key={`row-${r}`}>
      {row.map((item, c) => (
        <Col lg={12 / props.columns} md={6} sm={12} key={`row-${r}col-${c}`}>
          {item}
        </Col>
      ))}
    </Row>
  ));
  /* eslint-enable */
  return content;
};

const Items = props => {
  const content = ItemsUtil(props);
  return (
    <div className="list">
      <div className="list-header">
        <h2>{props.title}</h2>
      </div>
      {content}
    </div>
  );
};
Items.defaultProps = {
  title: "",
  list: [],
  columns: 4
};

export default Items;
