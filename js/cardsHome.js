const cards = [
    {
        titulo: 'Bolos Artesanais',
        descricao: 'Bolos temáticos esculpidos e decorados com pasta americana.', 
        imagem: '/assets/doces/boloHalloween.jpeg'
    },
    {
        titulo: 'Doces Personlizados',
        descricao: 'Kits mesversário, pirulitos de chocolate e cenários temáticos.', 
        imagem: '/assets/doces/doceCarros.jpeg'
    },
    {
        titulo: 'Compromisso Emocional',
        descricao: 'Cada detalhe é pensado para refletir a história e os desejos do cliente.', 
        imagem: '/assets/capa-Plantao-Psicologico.jpg'
    }
    
]




function exibirCards(){
    const cardContainer = document.querySelector('#cardContainer');

    cards.forEach(card => {
        const cardElement = document.createElement('div');

        cardElement.classList.add('card');

        cardElement.innerHTML =

        `
        <h2>${card.titulo}</h2>
        <p>${card.descricao}</p>
        <img src= "${card.imagem}" alt="${card.titulo}">
        `;

        cardContainer.appendChild(cardElement);
    });
}

exibirCards();