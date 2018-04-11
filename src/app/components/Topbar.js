import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "reactstrap";
import "../../assets/css/components/Topbar.css";
import Logo from "../../app/components/Logo";

const Topbar = props => {
  const reduced = props.top ? "" : "reduced";
  return (
    <div className={`bar ${reduced}`}>
      <div className="support__bar">
        <Row className="bar__content">
          <Col xs="12" md="4" className="bar__content--left" />
          <Col xs="12" md="4" className="bar__content--center">
            <Logo />
          </Col>
          <Col xs="12" md="4" className="bar__content--right">
            <Row className="pl-5 bottom w-100">
              <Col xs="6" md="6" className="text-center">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </Col>
              <Col xs="6" md="6" className="text-center">
                <NavLink exact to="/about">
                  About
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Topbar;
