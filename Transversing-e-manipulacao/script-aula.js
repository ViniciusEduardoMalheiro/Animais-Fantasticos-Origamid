// Duplique o menu e adicione ele em copy.

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);


//Selecione o primeiro DT da dl de Faq.

const primeiroDT = document.querySelector('dt')

console.log(primeiroDT)

// Selecione o DD referente ao primeiro DT.

const primeiroDD = document.querySelector('dd')

console.log(primeiroDD)

// Substitua o conteudo html de .faq pelo de .animais.

const faq = document.querySelector('.faq-lista');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML