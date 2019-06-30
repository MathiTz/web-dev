import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./componentes/PrimeiroComponente";
// import CompA, { CompB as B } from "./componentes/DoisComponentes";
// import MultiElementos from "./componentes/MultiElementos";
// import FamiliaSilva from "./componentes/FamiliaSilva";
// import Familia from "./componentes/Familia";
// import Membro from "./componentes/Membro";
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
// import Pai from "./componentes/Pai";
// import ComponenteClasse from "./componentes/ComponenteClasse";
// import Contador from "./componentes/Contador";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
// import Hook from "./componentes/Hook";

import Field from "./field";

const reducers = combineReducers({
  field: () => ({ value: "Opa" })
});

const elemento = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue="Teste" />
    {/* <Contador numeroInicial={100} /> */}
    {/* <ComponenteClasse /> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome="Silva">
      <Membro name="Andre" />
      <Membro name="Mariana" />
    </Familia> */}
    {/* <FamiliaSilva /> */}
    {/* <MultiElementos /> */}
    {/*<CompA valor="Olá eu sou A!" />
    <B valor="B na área" /> */}
    {/* <PrimeiroComponente valor="Bom dia!" /> */}
  </Provider>,
  elemento
);

// const jsx = <h1>Teste</h1>;
// ReactDOM.render(jsx, elemento);
