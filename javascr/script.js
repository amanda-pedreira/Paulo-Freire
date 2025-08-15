//  Feito por Amanda Luana, Daniel Lopes, Lucas Xavier, Miriam Caldas, Nicolás Corral e Pedro Gualberto!! 

const botao = document.querySelector('#botãopararolar')

botao.addEventListener('click', (click) => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})
