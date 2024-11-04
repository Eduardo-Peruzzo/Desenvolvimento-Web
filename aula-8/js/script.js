const container = document.getElementById("container")

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}



const montaCard = (atleta) => {
    const cartao = document.createElement("div");
    cartao.classList.add("cartao")
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const desc = document.createElement("p");
    const link = document.createElement("a");

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);
    
    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    desc.innerHTML = atleta.detalhes;
    cartao.appendChild(desc);

    link.innerHTML = "Saiba mais..."
    link.href = `detalhes.html?id=${atleta.id}`
    cartao.appendChild(link)

    container.appendChild(cartao)
}


pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
    (retorno) => {
        retorno.forEach((atleta) => montaCard(atleta))
    }
)
