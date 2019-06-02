const express = require("express");

const app = express();

const saudacao = require("./saudacaoMid");

app.use(saudacao("Guilherme"));

app.use((req, res, next) => {
  console.log("Antes");
  next();
});

app.get("/opa", (req, res, next) => {
  // res.send("<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>");
  // res.json({
  //   name: "iPad 32Gb",
  //   price: 1899.0,
  //   discount: 0.12
  // });
  // res.json([
  //   { id: 7, name: "Ana", posiiton: 1 },
  //   { id: 34, name: "Bia", position: 2 },
  //   { id: 73, name: "Carlos", position: 3 }
  // ]);
  console.log("Durante");
  res.json({
    data: [
      { id: 7, name: "Ana", posiiton: 1 },
      { id: 34, name: "Bia", position: 2 },
      { id: 73, name: "Carlos", position: 3 }
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  });
  next();
});

app.use((req, res) => {
  console.log("Depois");
});

app.listen(3000, () => {
  console.log("Backend executando...");
});
