import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import { BrowserRouter } from "react-router-dom";
// HashRouter -> ele ajuda com uma hash
import Routes from "./Routes";

export default props => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
