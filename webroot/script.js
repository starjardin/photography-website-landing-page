//these are the parent elements
const images = document.querySelector(".images");
const pictures = images.querySelectorAll("picture");
const picturesContainer = document.querySelector(".pictures-container");
const bigImage = images.querySelector(".big-image");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

//this function generates the images to move around.
function showImage (e) {
  const img = e.target;
  const sourceImage = e.target.src;//source of the image got clicked
  const altImage = e.target.alt;//alt of the image got clicked
  //html for the big image
  bigImage.innerHTML = `
  <img src="${sourceImage}" alt="${altImage}">
  `
}
//event listener
pictures.forEach(picture => picture.addEventListener("click", showImage))