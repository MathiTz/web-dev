const anonimo = process.argv.indexOf("-a") !== -1;
// console.log(anonimo);

/**
 * STDOUT -> Standart Output -> Saída de dados
 * STDIN -> Standart Input -> Entrada de dados
 */

if (anonimo) {
  process.stdout.write("Fala Anonônimo!\n");
  process.exit();
} else {
  process.stdout.write("Informe o seu nome: ");
  process.stdin.on("data", data => {
    const nome = data.toString().replace("\n", "");

    process.stdout.write(`Fala ${nome}!!\n`);
    process.exit();
  });
}
