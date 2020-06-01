// Mostre no console cada paragrafo do site
//const cadaParagrafo = document.querySelectorAll('p')
 //   console.log(cadaParagrafo);

//cadaParagrafo.forEach((item) => //console.log(item))

//Mostre os textos dos paragrafos no console
//cadaParagrafo.forEach((item, index) => 
    //console.log(item.innerText, index)
//);

//Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);
