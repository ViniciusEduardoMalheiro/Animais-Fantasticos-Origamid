const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);


gridSectionNode.forEach(function(item, index){
    console.log(item);
});


const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.pop()
