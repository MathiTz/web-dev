import React from "react";

export default props => {
  const aprovados = ["Paula", "Roberta", "Gustavo", "Julia"];
  let num = Math.random();
  const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>);
  };

  return (
    <ul>
      {num}
      {gerarItens(aprovados)}
    </ul>
  );
};
