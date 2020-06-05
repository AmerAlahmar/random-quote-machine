import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteText: "",
      quoteAuthor: "",
    };
  }

  getQuote() {
    this.setState({
      quoteText:
        "No matter how evil someone looks like, he/she must have some good inside.",
      quoteAuthor: "Amer, The KING.",
    });
  }

  render() {
    if (this.state.quoteText === "") {
      this.getQuote();
    }

    return (
      <Container
        id="quote-box"
        className="m-auto w-75 py-4 px-3 align-content-center rounded"
      >
        <Row className="justify-content-center p-4">
          <Col xs="auto" className="align-self-start">
            <FontAwesomeIcon icon={faQuoteLeft} size="2x fa-fw" fa-pull-left />
          </Col>
          <Col className="text-center">
            <h2>{this.state.quoteText}</h2>
          </Col>
          <Col xs="auto" className="align-self-end">
            <FontAwesomeIcon
              icon={faQuoteRight}
              size="2x fa-fw"
              fa-pull-right
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-right pr-5 mt-4">
            <p>- {this.state.quoteAuthor}</p>
          </Col>
        </Row>
        <Row className="justify-content-between p-2 mt-4">
          <Col xs="auto">
            <Button>
              <FontAwesomeIcon icon={faTwitter} size="lg fa-fw" fa-pull-right />
            </Button>
          </Col>
          <Col xs="auto">
            <Button>New quote</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
