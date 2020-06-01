// //const animaisLista = document.querySelector('.animais-lista');

// //function callbackLista(event) {
//   //  console.log(event.currentTarget)
//   /////  console.log(event.path)
// ////}

// //animaisLista.addEventListener('click', callbackLista);


// // const linkExterno = document.querySelector('a[href^="http"]');

// // function handelLinkExterno(event) {
// // event.preventDefault();
// // console.log(event)
// // console.log(this.getAttribute('href'))
// // console.log(event.currentTarget);
// // }

// linkExterno.addEventListener('click', handelLinkExterno);

// const h1 = document.querySelector('h1')

// function handleEvent(event) {
//     console.log(event)    
// }

// h1.addEventListener('click', handleEvent)     
// //h1.addEventListener('mouseenter', handleEvent)
// //h1.addEventListener('mousemove', handleEvent) 


// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)

// function handleKeyboard(event) {
//     console.log(event)
// }

// window.addEventListener('keydown', handleKeyboard)


//const imgss = document.querySelector('img')

//function imagens (evento) {
// console.log(evento)
 //  console.log('Clicou')
//}

//imgss.addEventListener('click', imagens)

 const imgs = document.querySelectorAll('img')


function handleImg (event) {
    console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});

