
const images = document.querySelectorAll(".images")
const mainImage = document.querySelector(".mainimages")
const totalImages = images.length
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let indexImage = 0
mainImage.src = images[0].src;

function updateImage(index){
    mainImage.src = images[index].src;
}

for(let i =0; i < images.length; i++){
    
    images[i].addEventListener("click", () => {
        indexImage = i;
        updateImage(indexImage)
    })
}

prev.addEventListener("click", () => {
    indexImage = (indexImage === 0) ? images.length - 1 : indexImage - 1
    updateImage(indexImage)
})

next.addEventListener("click",() => {
    indexImage = (indexImage === images.length - 1) ? 0 : indexImage + 1
    updateImage(indexImage)
})