import React, { Component } from "react";
import { Link } from "react-router-dom";
import Buttons from "mdbreact";
import {Footer} from "mdbreact"


class Footer extends Component {

    render() {
        return (

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
<hr/>
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
<hr/>
</footer> 
)}
}

export default Footer;