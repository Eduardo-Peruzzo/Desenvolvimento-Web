const meuObjeto = {
    nome: 'Eduardo',
    idade: 13
}

const preco = 40;

console.log(preco > 40 ? "livro caro" : "livro barato")

meuObjeto.telefone = '123456';

const func2 = function (a, b) {
    return a * b;
}

console.log(func2(2, 3));

const func3 = (entrada) => {
    return entrada + " é bonito";
}

const minha_lista = ["oi", 1, "tchau", 2, [1, 2, 3]];

const func4 = function (a, b) {
    return console.log("O elemento " + a + " é " + typeof (a) + " e é o " + b + "°" + " elemento.");
}

minha_lista.forEach((elemento, indice) => func4(elemento, indice));

console.log(`teste da template string ${minha_lista} agora deve ter aparecido a lista`);