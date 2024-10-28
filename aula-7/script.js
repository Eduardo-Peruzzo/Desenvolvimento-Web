const container = document.getElementById("container")

let conteudo = ''

// for (let i = 0; i < dados.length; i++){
//     let atleta = dados[i]

//     conteudo += montaCard(atleta)    
// }

const montaCard = (atleta) =>
`
    <div class='cartao'>
    <h1>${atleta.nome}</h1>
    <img src=${atleta.imagem}>
    <p>${atleta.detalhes}</p>
    </div>
`

dados.forEach((atleta) => conteudo += montaCard(atleta))

container.innerHTML = conteudo