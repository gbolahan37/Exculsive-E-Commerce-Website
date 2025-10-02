// let age = prompt("How old are you?")

// if (age < 18) {
//     console.log("This user is not eligible to vote")
// } else {
//    console.log("This user is eligible to vote") 
// }

let div = document.querySelector(".question")
let paragraph = document.querySelector(".paragraph")

div.addEventListener("click", () => {
    paragraph.classList.toggle("visible")
})

