// MANIPULAÇÃO DE DOM

// DOM -> DOCUMENT OBJECT MODEL
// FUNCIONA COMO UMA ARVORE E O JAVSCRIPT CONSEGUE MANIPULAR.
// PRINCIPAIS METODOS DE ACESSO NO DOM

// getElementByID -> Seleciona um elemento pelo seu ID

// querySelector -> Seleciona o 1 elemento que corresponde a um seletor CSS

// querySelectorAll -> Seleciona TODOS os elementos que correspodem ap seletor.

// Exemplo usando getElemetBYId


// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText;
// console.log(titulo);
// console.log(valor);


// querySelector

// const titulo = document.querySelector("#titulo"); // ( # id )
// const paragrafo = document.querySelector(".paragrafo"); // ( . id)
// const tituloH2 = document.querySelector("h2"); // tags -> h2

// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloH2);


// // querySelectorAll -> Apropriado para listas que correspodem ao seletor que chamamos. 

// const elementos = document.querySelectorAll(".texto");
// console.log(elementos);


// // Percorrendo a lista

// elementos.forEach((elemento) => {
//     console.log(elemento.innerText);
// })

// // Alteração textos 

// const itens = document.querySelectorAll(".texto");

// // innerHTML -> troca o texto que está dentro da tag
// itens.forEach((itens) => {
//     itens.innerText = "alterado";
// })


// // innerHTML -> troca as tags 
// itens.forEach((item) => {
//     item.innerHTML = "<h2>Item</h2>"
// })


// itens.forEach((item) => {
//     item.style.color = "red";
// })

// parametro = itens função = item

// EVENTOS COM JS
// O que são eventos ? Ações do usuario

// Evento de click
//     => aerovachio ?
 
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Voçê clicou")
// })



// Evento de digitação(input / keyup)
// Evento input -> Dispara sempre que digita em tempo real

// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// campo.addEventListener("input", () => {
//     resultado.innerText = campo.value; //resultado recebe o valor digitado em tempo real.
// })


// // Evento keyup -> Dispara ao soltar a tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
//     console.log("Tecla Pressionada.");
// })


// Evento de mouse
// const elemento = document.getElementById("troca_cor");

// // mouseover -> quando passar o mouse por cima
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000"
// })

// // mouseover -> quando o mouse sair muda a cor
// elemento.addEventListener("mouseout", () => {
//     //elemento.style.backgroundColor = "#0000ff"
//     elemento.style.backgroundColor = "";
// })


// //pega a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log("Posição X:", evento.clientX, "Posição Y: ", evento.clientY)

// })



// // Evento de formulario (submit)
// const form = document.getElementById("form");

// //comportamento padrão de um formulário é recarregar a página
// form.addEventListener("submit", (evento) => {
//     evento.preventDefault(); // impede o comportamento padrão

//     const nome = document.getElementById("nome").value;
//     console.log("Nome: ", nome);
    
// })



// // Criando elemento na página
// const novoElemento = document.createElement("p"); // cria o elemento 
// novoElemento.innerText = "Elemento novo criado"; // cria um texto no elemento

// const form = document.getElementById("form");
// form.appendChild(novoElemento); // estamos adicionando um elemento filho dentro pai (form).

// const botao = document.createElement("button");
// botao.innerText = "Excluir elemento";
// form.appendChild(botao);

// botao.addEventListener("click", (e) => {
//     e.preventDefault();
//      novoElemento.remove();

//     // apagando direto do pai
//     //  form.removeChild(novoElemento);    
// })


// // Adicionando elemento em uma lista a partir de um input

// const input = document.getElementById("input"); // input
// const botao = document.getElementById("add"); // button
// const lista = document.getElementById("lista"); // ul

// botao.addEventListener("click", () => {
//     const valor = input.value; // pega o valor digitado na caixinha.

//     const li = document.createElement("li");
//     li.innerText = valor;

//     lista.appendChild(li);
//     input.value = "";  
// })




const input = document.getElementById("input"); 

botao.addEventListener("click", () => {
    const valor = input.value; // pega o valor digitado na caixinha.

    const li = document.createElement("li");
    li.innerText = valor;

    lista.appendChild(li);
    input.value = "";  
})












