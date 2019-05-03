import React, { Component, Fragment } from "react";
import "./App.css";

import Display from "./components/display/Display";
import Search from "./components/input/Search";
import Capitals from "./components/capitals/Capitals";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Display />
        <Search />
        <Capitals />
      </Fragment>
    );
  }
}
