// Produto
class Produto {
  constructor(id, titulo, preco, imagem) {
    this.id = id;
    this.titulo = titulo;
    this.preco = preco;
    this.imagem = imagem;
  }
}

// Carrinho
class Carrinho {
  constructor() {
    this.itens = [];
  }

  adicionar(produto) {
    this.itens.push(produto);
  }

  remover(index) {
    this.itens.splice(index, 1);
  }

  listar() {
    return this.itens;
  }

  total() {
    return this.itens.reduce((soma, item) => soma + item.preco, 0);
  }
}

// Lista de Produtos
const listaDeProdutos = [
  {
    id: 1,
    titulo: "Bolo de Ursinho Poo",
    imagem: "/assets/bobos/bolo-ursinho.jpeg", 
    preco: 200
  },
  {
    id: 2,
    titulo: "Bolo de Halloween",
    imagem: "/assets/bobos/bolo-halloween.jpeg",
    preco: 160
  },
  {
    id: 3,
    titulo: "Kit Panda",
    imagem: "/assets/bobos/kit-panda.jpeg",
    preco: 610
  }
];

// DOM
const produtosDiv = document.getElementById("produtos");
const carrinhoUl = document.getElementById("lista-carrinho");
const totalP = document.getElementById("total");

const carrinho = new Carrinho();

// Mostrar produtos
listaDeProdutos.forEach(prod => {
  const produto = new Produto(prod.id, prod.titulo, prod.preco, prod.imagem);

  const card = document.createElement("div");
  card.classList.add("produto");

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.titulo}">
    <h3>${produto.titulo}</h3>
    <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
    <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao Carrinho</button>
  `;

  produtosDiv.appendChild(card);
});

// Funções do carrinho
function adicionarCarrinho(id) {
  const prod = listaDeProdutos.find(p => p.id === id);
  const produto = new Produto(prod.id, prod.titulo, prod.preco, prod.imagem);
  carrinho.adicionar(produto);
  atualizarCarrinho();
}

function removerCarrinho(index) {
  carrinho.remover(index);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  carrinhoUl.innerHTML = "";

  carrinho.listar().forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.titulo} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerCarrinho(${index})">Remover</button>
    `;
    carrinhoUl.appendChild(li);
  });

  totalP.textContent = `Total: R$ ${carrinho.total().toFixed(2)}`;
}