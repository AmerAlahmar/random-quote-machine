import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Card from "./quote-card/card";

export default function App() {
  return (
    <div id="page">
      <Container className="h-100">
        <Row className="justify-content-center h-100">
          <Col className="m-auto">
            <Card></Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
