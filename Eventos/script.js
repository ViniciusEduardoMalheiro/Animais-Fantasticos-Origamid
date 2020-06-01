// const linksInt = document.querySelectorAll('a[href^="#"]');

// function handleLink (event) {
//     event.preventDefault();
//     linksInt.forEach((link) => {
//         link.classList.remove('ativo')
//     })
//     event.currentTarget.classList.add('ativo')
//  }

// linksInt.forEach((link) => {
//     link.addEventListener('click', handleLink)
// });


// const todosElementos = document.querySelectorAll('body *')

// function handleElement (event) {
//     event.target.remove()
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElement);
// })


//Se o usuario clicar no (t), aumente todo o texto do site.

 function handleClickT(event) {
    console.log(event.key)
     if(event.key === 't') { 
     document.documentElement.classList.toggle('textomaior')
        }
 }

 window.addEventListener('keydown', handleClickT)