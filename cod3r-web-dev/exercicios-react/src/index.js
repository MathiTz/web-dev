import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./componentes/PrimeiroComponente";
import CompA, { CompB as B } from "./componentes/DoisComponentes";
import MultiElementos from "./componentes/MultiElementos";
import FamiliaSilva from "./componentes/FamiliaSilva";
import Familia from "./componentes/Familia";
import Membro from "./componentes/Membro";

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Familia sobrenome="Silva">
      <Membro name="Andre" />
      <Membro name="Mariana" />
    </Familia>
    {/* <FamiliaSilva /> */}
    {/* <MultiElementos /> */}
    {/*<CompA valor="Olá eu sou A!" />
    <B valor="B na área" /> */}
    {/* <PrimeiroComponente valor="Bom dia!" /> */}
  </div>,
  elemento
);

// const jsx = <h1>Teste</h1>;
// ReactDOM.render(jsx, elemento);
