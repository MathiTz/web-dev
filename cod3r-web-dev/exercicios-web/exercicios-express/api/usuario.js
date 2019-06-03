function salvar(req, res) {
  res.send("Usuário > salvar");
}

function obter(req, res) {
  res.send("Usuário > obter");
}

module.exports = { salvar: salvar, obter };

// pode usar chave valor ou somente mesmo nome
