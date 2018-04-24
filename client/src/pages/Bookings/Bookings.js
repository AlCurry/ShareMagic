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
        <footer class="page-footer font-small stylish-color-dark pt-4 mt-4">
          <div class="container text-center text-md-left">
            <div class="row">
              <div class="col-md-6">
                <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
                  Disclaimer
                </h5>
                <p>
                  We are not responsible for any incorrect bookings. Copyrigth
                  ShareMagic 2018
                </p>
              </div>
              <hr class="clearfix w-100 d-md-none" />
              <div class="col-md-6">
                <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
              </div>
            </div>
          </div>
          <hr />
          <div class="text-center py-3">
            <ul class="list-unstyled list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="mb-1">Register for free</h5>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="btn btn-danger btn-rounded">
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
