// menu responsive code
let menu = document.querySelector('.menu')
let menu_toggle = document.querySelector('.menu_toggle')

menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active')
    menu.classList.toggle('responsive')
}
