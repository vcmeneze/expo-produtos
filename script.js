const carrinho = [];

function quero(idprod) {
  carrinho.push(idprod);
  console.log("Carrinho: ", carrinho);
}

function atualizarNumeroItensCarrinho() {
  const carrinhoCount = document.getElementById("carrinhoCount");

  if (carrinhoCount) {
    carrinhoCount.textContent = carrinho.length.toString();
    carrinhoCount.style.display = carrinho.length > 0 ? "block" : "none";
  }
}

atualizarNumeroItensCarrinho();
