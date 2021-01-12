let inputTamanho = document.querySelector('[name=tamanho]');
let outputTamanho = document.querySelector('[name=valortamanho]');

function mostraTamanho() {
    outputTamanho.value = inputTamanho.value;
    outputTamanho.textContent = event.target.value;
}

inputTamanho.oninput = mostraTamanho;
inputTamanho.onrange = mostraTamanho; /* Para dar suporte ai IE10 */

/* Há algum outro lugar do código no qual precisamos chamar essa função? Não! Porém, é pra isso que damos um nome à uma função, para que seja possível usá-la em mais de um ponto do código.
É muito comum que algumas funções tenham uma única referência no código. E é o nosso caso com a função mostraTamanho . Nesses casos, o JavaScript permite que criemos a função no lugar onde antes estávamos indicando seu nome:

inputTamanho.oninput = function() {
    outputTamanho.value = inputTamanho.value
}

Transformamos a função mostraTamanho em uma função sem nome, uma FUNÇÃO ANÔNIMA. Ela continua sendo executada normalmente quando o usuário alterar o valor para o tamanho. */
