const primeiraImg = document.querySelector('img')
const imgTop = primeiraImg.offsetTop;

console.log(imgTop)

//Retorne a soma da largura de todas as imagens 

function somaImagem () {
    const imgs = document.querySelectorAll('img')
    let soma = 0;
    imgs.forEach((imagem) => {
        console.log(imagem.offsetWidth)
    soma = soma + imagem.offsetWidth;
 });
 console.log(soma)
}


window.onload = function () {
    somaImagem();
}


//Verifique se os links da pagina possuem
//o minimo recomendado para telas ultilizados
//com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {
    const linkwidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkwidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui Acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
})


//Se o browser for menor que 720px,
//adicione a classe menu-mobile ao menu


const quarqueum = window.matchMedia('(max-width: 450px)').matches;

    if(quarqueum) {
        const menu = document.querySelector('.menu')
        menu.classList.add('menu-mobile')
    }


