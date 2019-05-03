import React, { Fragment, Component } from "react";
import "./Display.css";

export default class Display extends Component {
  render() {
    return (
      <Fragment>
        <h1>Previsão do tempo</h1>
        <div className="white-square">
          <aside>
            <small>Cidade, ES - País</small>
          </aside>
          <h1>Capital</h1>
        </div>
      </Fragment>
    );
  }
}
