import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './compontents/MainComponent';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
