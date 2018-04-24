import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Booking from "../../components/Booking";
import LazyHeros3 from "../../components/LazyHero3";
import { Button } from "mdbreact";

class Bookings extends Component {
  render() {
    return (
      <Container fluid>
        <LazyHeros3 />
        <Booking />
        <Row>
          <Col size="md-3">
            <Button outline color="primary">
              <Link to="/">← Back to Homes</Link>
            </Button>
          </Col>
        </Row>
        <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-12">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                  Disclaimer
                </h5>
                <p>
                  We are not responsible for any incorrect bookings. Copyright
                  ShareMagic 2018
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-12" />
            </div>
          </div>
          <hr />
          <div className="text-center py-3">
            <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="btn btn-danger btn-rounded">
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

export default Bookings;
