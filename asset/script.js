let button = document.querySelector(".scroll-buutton")
let productContainer = document.querySelector(".flash-sales__products")
let categroyContainer = document.querySelector("cate-card")
let categroyCard = document.querySelector("cate-box")
let productCard = document.querySelector(".product-card")
let leftButton = document.querySelector(".left-button")
let rightButton = document.querySelector(".right-button")
let cateRightButton = document.querySelector(".cate-right-button")
let cateLeftButton = document.querySelector(".cate-left-button")

function scrollRight (){
    let containerWidth = productContainer.clientWidth
    let cardWidth = productCard.clientWidth
    let scrollMovement = Math.floor(containerWidth/cardWidth) * cardWidth

    productContainer.scrollLeft = productContainer.scrollLeft + scrollMovement
}

function leftSide () {
    let containerWidth = productContainer.clientWidth
    let cardWidth = productCard.clientWidth
    let scrollMovement = Math.floor(containerWidth / cardWidth) * cardWidth
     
    productContainer.scrollLeft = productContainer.scrollLeft - scrollMovement
}

// categroyCard Stroll 

function cateScrollRight (){
    let cateWidth = categroyContainer.clientWidth
    let cateCard = categroyCard.clientWidth
    let scrollCategroy = Math.floor(cateWidth / cateCard) * cateCard

    categroyContainer.scrollLeft = productContainer.scrollLeft + scrollCategroy
}

function cateScrollLeft (){
    let cateWidth = categroyContainer.clientWidth
    let cateCard = categroyCard.clientWidth
    let scrollCategroy = Math.floor(cateWidth / cateCard) * cateCard

    categroyContainer.scrollLeft = productContainer.scrollLeft - scrollCategroy
}

rightButton.addEventListener("click", scrollRight)
leftButton.addEventListener("click", leftSide)

cateRightButton.addEventListener("click", cateScrollRight)
cateLeftButton.addEventListener("click", cateScrollLeft)
