//these are the parent elements
const images = document.querySelector(".images");
const pictures = images.querySelectorAll("picture");
const bigImage = images.querySelector(".big-image");

//this function generates the images to move around.
function showImage (e) {
  const img = e.target;
  const sourceImage = e.target.src;//source of the image got clicked
  const altImage = e.target.alt;//alt of the image got clicked
  //html for the big image
  bigImage.innerHTML = `
  <img src="${sourceImage}" alt="${altImage}">
  `
  //take the first pic
  const firstPic = images.querySelector(".carvings");
  const firstImg = firstPic.querySelector("img");
  //find the parent of the imge got click
  const currentPic = img.closest("picture");
  //html of the image got clicked
  currentPic.innerHTML = `
  <img src="${firstImg.src}" alt="${altImage}">
  `
  //html for the first image
  firstPic.innerHTML = `
  <img src="${sourceImage}" alt="${altImage}">
  `
}
//event listener
pictures.forEach(picture => picture.addEventListener("click", showImage))