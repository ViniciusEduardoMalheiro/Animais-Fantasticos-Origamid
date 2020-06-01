/*const imgs = document.querySelectorAll('img')
    //console.log(imgs)

let i = 0

imgs.forEach(function(item, posicao, array){
    //console.log(item, posicao, array)
})*/


const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

//console.log(titulos);
//console.log(imgs)

titulosArray.forEach(function(item, index, array){
   // console.log(item, index, array)
});

const imgs = document.querySelectorAll('img')
    //console.log(imgs)

/*let i = 0
imgs.forEach((item) => {
    console.log(i++)
})*/

let i = 0

imgs.forEach((item) => console.log(item));