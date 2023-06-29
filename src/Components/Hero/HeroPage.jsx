import React from "react";
import { Col, Row, Select, Typography } from "antd";

const HeroPage = () => {
  return (
    <div className="my-8">
      <Row>
        <Col className="stats-containter">
          <Col>
            <Col>Hello there</Col>
          </Col>

          {/* other form  */}

          <Col className="other-stats-info">
            <Col>
              <h3>Hello world</h3>
            </Col>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default HeroPage;
