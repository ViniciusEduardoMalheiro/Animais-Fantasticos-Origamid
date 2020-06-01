const h1Selecionado = document.querySelector('h1')
const h1Classes = h1Selecionado.classList
console.log(h1Classes)

function callbackh1 () {
    console.log('Clicou em ', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click', callbackh1)

const hrefPagina = window.location.href;
console.log(hrefPagina)


const elementAtivo = document.querySelectorAll('.ativo')
    console.log(elementAtivo)



const linguagem = window.navigator.language;
console.log(linguagem)


const largura = window.innerWidth;
console.log(largura)


const altura = window.innerHeight;
console.log(altura)