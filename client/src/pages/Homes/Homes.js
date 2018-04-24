import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Booking from "../../components/Booking";
import LazyHero from "react-lazy-hero";
import LazyHeros from "../../components/LazyHero";
import Footer from "../../components/Footer";

class Homes extends Component {
  state = {
    homes: [],
    title: "",
    owner: "",
    address: "",
    bedrooms: "",
    bathrooms: ""
  };

  componentDidMount() {
    this.loadHomes();
  }

  loadHomes = () => {
    console.log("before api");
    API.getHomes()
      .then(res => {
        this.setState({ homes: res.data, title: "", owner: "", addres: '', bedrooms: '', bathrooms: '' });
        console.log("added homes to state");
      })
      .catch(err => console.log(err));
  };

  deleteHome = id => {
    API.deleteHome(id)
      .then(res => this.loadHomes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.owner) {
      console.log("hfs test");
      alert('Home Saved!')
      API.saveHome({
        title: this.state.title,
        owner: this.state.owner,
        address: this.state.address,
        bedrooms: this.state.bedrooms,
        bathrooms: this.state.bathrooms
      })
        .then(res => this.loadHomes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <LazyHeros />
        <br />
        <Row>
          <Col size="md-6">
            <LazyHero imageSrc="https://s-media-cache-ak0.pinimg.com/originals/b0/8c/0d/b08c0de61293ebc9f2d57a2adbfdcbe9.jpg" opacity=".33">
              <h1 class="addview">Add a House</h1>
            </LazyHero>
            <br />
            <form className="mb-5">
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.owner}
                onChange={this.handleInputChange}
                name="owner"
                placeholder="Owner (required)"
              />
              <TextArea
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                icon="road"
                placeholder="Address (Optional)"
              />
              <TextArea
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                icon="road"
                placeholder="City (Optional)"
              />
              <TextArea
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                icon="road"
                placeholder="State (Optional)"
              />
              <TextArea
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipcode"
                icon="road"
                placeholder="Zipcode (Optional)"
              />
              <TextArea
                value={this.state.bedrooms}
                onChange={this.handleInputChange}
                name="bedrooms"
                placeholder="Bedrooms (Optional)"
              />
              <TextArea
                value={this.state.bathrooms}
                onChange={this.handleInputChange}
                name="bathrooms"
                placeholder="Bathrooms (Optional)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="House Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.owner && this.state.title)}
                onClick={this.handleFormSubmit}>
                Add House!
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 ">
            <LazyHero imageSrc="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1485547918/new-york-city-skyline-BIGCITY0117.jpg?itok=po0Op8ou" opacity=".33">
              <h1 class="addview">Home List</h1>
            </LazyHero>
            <br />
            {this.state.homes.length ? (
              <List>
                {this.state.homes.map(home => (
                  <ListItem key={home._id}>
                    <Link to={"/Homes/" + home._id}>
                      <strong>
                        {home.title}{` owned by ` + home.owner}
                        <br />
                        {`with ` + home.bedrooms + ` Bedrooms`}{` and ` + home.bathrooms + ` Bathrooms`}
                        <br />
                        {home.city} {home.state}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteHome(home._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <footer class="page-footer font-small stylish-color-dark pt-4 mt-4">


          <div class="container text-center text-md-left">
            <div class="row">

              <div class="col-md-6">
                <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Disclaimer</h5>
                <p>We are not responsible for any incorrect bookings. Copyrigth ShareMagic 2018</p>
              </div>
              <hr class="clearfix w-100 d-md-none" />
              <div class="col-md-6" >
                <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul class="list-inline">
                  <li>
                    *<a href="#!">Link 1</a>*
          <a href="#!">Link 2</a>
                    *<a href="#!">Link 3</a>
                    *<a href="#!">Link 4</a>*
        </li>
                </ul>
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
                <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
              </li>
            </ul>
          </div>
          <hr />
        </footer>
      </Container >

    )
  }
}

export default Homes;
