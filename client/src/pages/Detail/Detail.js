import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import LazyHeros2 from "../../components/LazyHero2";
import { Button } from "mdbreact";

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
              <br />
              <h4 id="housetitle">{this.state.home.title}</h4>
              <h4>Address:</h4>
              <p>
                {this.state.home.address} {this.state.home.city}{" "}
                {this.state.home.state} {this.state.home.zipcode}
              </p>
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
          <Col size="md-3">
            <Button outline color="primary">
              <Link to="/">← Back to Homes</Link>
            </Button>
          </Col>
        </Row>
        <br/>
        <br/>
        <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                  Disclaimer
                </h5>
                <p>
                  We are not responsible for any incorrect bookings. Copyrigth
                  ShareMagic 2018
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none" />
            </div>
          </div>
          <hr />
          <div className="text-center py-3">
            <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
              </li>
              <li className="list-inline-item">
                <a href="/login" className="btn btn-danger btn-rounded">
                  Sign up!
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </footer>
      </Container>
    );
  }
}

export default Detail;
