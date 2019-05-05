const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// sincrono...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assincrono...
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  try {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
  } catch (err) {
    console.log("Cant find the thing");
  }
});

const config = require("./arquivo.json");
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
  try {
    console.log("Conteúdo da pasta...");
    console.log(arquivos);
  } catch (err) {
    console.log("Cant find a thing");
  }
});
