let images = ["Outfit Inspiration Two.jpg", "Outfit Inspiration Three.jpg", "Outfit Inspiration Four.jpg", "Outfit Inspiration Five.jpg", "Outfit Inspiration One.jpg"];
function changeImage() {
    let img = document.querySelector("#image");
    let counter = parseInt(img.dataset.counter || 0);
    img.src = images[counter];
    counter = (counter + 1) % images.length;
    img.dataset.counter = counter;
}
button.addEventListener("click", changeImage)