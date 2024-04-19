const produtos = [
    {
        id: 1,
        imagem: "../img/products/product1.png",
        titulo: "Faça já seu orçamento!",
        tipo: "eletronico",
        descricao:
            "descriçao 1",
    },
    {
        id: 2,
        imagem: "../img/products/product2.png",
        titulo: "Faça já seu orçamento!",
        tipo: "eletronico",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 3,
        imagem: "../img/products/product3.png",
        titulo: "Faça já seu orçamento!",
        tipo: "periferico",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 4,
        imagem: "../img/products/product4.png",
        titulo: "Faça já seu orçamento!",
        tipo: "periferico",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 5,
        imagem: "../img/products/product5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "periferico",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
];

const acessorios = document.getElementById("products-acessories-inner");

produtos.forEach((produto) => {
    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = `
     <div class="product">
                <img src="${produto.imagem}" />
                <div class="main-acessories-info">
                    <p>${produto.titulo}</p>
                    <span>
                        ${produto.descricao}
                    </span>
                </div>
            </div>
 `;
acessorios.appendChild(novoElemento);
});


