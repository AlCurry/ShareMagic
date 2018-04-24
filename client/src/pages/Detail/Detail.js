import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import LazyHeros2 from "../../components/LazyHero2"

class Detail extends Component {
  state = {
    home: {}
  };
  // When this component mounts, grab the home with the _id of this.props.match.params.id
  // e.g. localhost:3000/homes/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getHome(this.props.match.params.id)
      .then(res => this.setState({ home: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <LazyHeros2>
              <h1>
                {this.state.home.title} by {this.state.home.owner}
              </h1>
            </LazyHeros2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article class="details1">
              <br/>
              <h4 id="housetitle">{this.state.home.title}</h4>
              <h4>Address:</h4>
              <p>{this.state.home.address} {this.state.home.city} {this.state.home.state} {this.state.home.zipcode}</p>
              <h4>Bedrooms:</h4>
              <p>{this.state.home.bedrooms}</p>
              <h4>Bathrooms:</h4>
              <p>{this.state.home.bathrooms}</p>
              <h4>House Description:</h4>
              <p>{this.state.home.description}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Homes</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
