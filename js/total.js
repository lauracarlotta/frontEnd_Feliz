let inputQuantidade = document.querySelector("input#qtd");
let outputTotal = document.querySelector("output#total");

inputQuantidade.oninput = function() {

    let preco = document.querySelector("#preco").textContent;

    preco = preco.replace("R$", "");
    preco = preco.replace(",", ".");
    preco = parseFloat(preco);

    /* console.log(preco); */

    let quantidadeItens = inputQuantidade.value;
    /* console.log(quantidadeItens); */

    let totalValorCompra = quantidadeItens * preco;
    /* console.log(totalValorCompra); */

    totalValorCompra = "R$" + totalValorCompra.toFixed(2);
    totalValorCompra = totalValorCompra.replace(".", ",");

    outputTotal.value = totalValorCompra;
}
