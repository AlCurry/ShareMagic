import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import LazyHero from 'react-lazy-hero';


class Homes extends Component {
  state = {
    homes: [],
    title: "",
    owner: "",
    address: ""
  };

  componentDidMount() {
    this.loadHomes();
  }

  loadHomes = () => {
    console.log("before api");
    API.getHomes()
      .then(res => {
        this.setState({ homes: res.data, title: "", owner: "" });
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
      API.saveHome({
        title: this.state.title,
        owner: this.state.owner,
        address: this.state.address
      })
        .then(res => this.loadHomes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>What Homes Should I cop?</h1>
            </Jumbotron> */}
            <form>
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
                placeholder="Address (Optional)"
              />
              <FormBtn
                disabled={!(this.state.owner && this.state.title)}
                onClick={this.handleFormSubmit}>
                Submit
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6">
            {/* <LazyHero>
              <h1>Share House</h1>
            </LazyHero> */}

            {this.state.homes.length ? (
              <List>
                {this.state.homes.map(home => (
                  <ListItem key={home._id}>
                    <Link to={"/homes/" + home._id}>
                      <strong>
                        {home.title} by {home.author}
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
      </Container>
    );
  }
}

export default Homes;
