const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementsByClassName("menu-btn-sm")[0]
let opened = false

menuBtn.addEventListener('click', () => {
    
    if(!opened){
        menu.className = "menu-btn-sm active"
        opened = true
    } else {
        menu.className = "menu-btn-sm"
        opened = false

    }
})