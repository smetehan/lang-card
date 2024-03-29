import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Language from "./Language";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container
      className="rounded-3 mt-4 p-4 "
      style={{ background: "#f48b29" }}
    >
      <h1 className="text-white my-2 ">Language</h1>
      <Row className="g-3 justify-content-center">
        {data.map((lang, index) => {
          return (
            <Col key={index} sm={6} md={4} lg={3}>
              <Language {...lang} />;
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
