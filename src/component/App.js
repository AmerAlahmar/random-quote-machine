import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  getQuote() {
    this.setState({
      quote:
        "No matter how evil someone looks, he/she must have some good inside.",
      author: "Amer, The KING.",
    });
  }

  render() {
    if (this.state.quote === "") {
      this.getQuote();
    }

    return (
      <Container className="container h-100">
        <Row className="justify-content-center h-100">
          <Col className="m-auto">
            <div id="quote-box" className="m-auto w-75 py-4 px-3">
              <h1>{this.state.quote}</h1>
              <p>{this.state.author}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
