// aurora
const auroraGalleryBtn = document.querySelector("#aurora-gallery-btn")
const auroraGallery = document.querySelector("#aurora-gallery")

auroraGalleryBtn.addEventListener("click", showAuroraGallery)

function showAuroraGallery() {
    auroraGallery.classList !== "show-gallery" ? auroraGallery.classList.toggle("show-gallery") : ""
    auroraGalleryBtn.textContent == "Guarda la gallery" ? auroraGalleryBtn.textContent = "Nascondi la Gallery" : auroraGalleryBtn.textContent = "Guarda la gallery"
}

// natalie
const natalieGalleryBtn = document.querySelector("#natalie-gallery-btn")
const natalieGallery = document.querySelector("#natalie-gallery")

natalieGalleryBtn.addEventListener("click", showNatalieGallery)

function showNatalieGallery() {
    natalieGallery.classList !== "show-gallery" ? natalieGallery.classList.toggle("show-gallery") : ""
    natalieGalleryBtn.textContent == "Guarda la gallery" ? natalieGalleryBtn.textContent = "Nascondi la gallery" : natalieGalleryBtn.textContent = "Guarda la gallery"
}

// navbar link active class toggle
const nav = document.querySelector("#navbar")
const links = nav.querySelectorAll(".nav-link")

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
    })
}

// year script
document.getElementById("year").innerHTML = new Date().getFullYear();