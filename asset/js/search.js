let searchIcon = document.querySelector(".search-icon")
let  typeArea = document.querySelector(".search-background") 
let escButton = document.querySelector(".esc-btn")
let myInputField = document.querySelector(".myinput")

function searcBar (){
    typeArea.style.display = "block"
    myInputField.focus()
}
searchIcon.addEventListener("click", searcBar)

function escBar (){
    typeArea.style.display = "none"
}
escButton.addEventListener("click", escBar)
