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

//function Slider(slider) {
//    if (!slider instanceof Element) {
//        throw new Error('No slider passed in');
//    }
//    // creat some variables for working with the slider
//    prevButton.addEventListener('click', () => move('back'));
//    nextButton.addEventListener('click', move);
//    startSlider();
//    applyClasses();
//}
//const mySlider = Slider(document.querySelector('.images'));

//function sliderImages () {
//    function startSlider () {
//        current = slider.querySelector('.current') || picturesContainer.firstElementChild;
//        prev = current.previousElementSibling || picturesContainer.lastElementChild;
//        next = current.nextElementSibling || picturesContainer.firstElementChild;
//    }
  
//    function applyClasses() {
//        current.classList.add('current');
//        prev.classList.add('prev');
//        next.classList.add('next');
//    }
  
//  function move (direction) {
//    let current;
//    let prev;
//    let next;
//    // first part of the move function, delete all the classes from the element
//      const classesToRemove = ['prev', 'current', 'next'];
//      prev.classList.remove(...classesToRemove);
//      current.classList.remove(...classesToRemove);
//      next.classList.remove(...classesToRemove);
//      if (direction === "back") {
//          // Swap the variable when we go backwards
//          [prev, current, next] = [
//              prev.previousElementSibling || picturesContainer.lastElementChild,
//              prev,
//              current
//          ];
//      } else {
//          // Do the opposite if we go forwards
//          [prev, current, next] = [
//              current,
//              next.
//              nextElementSibling || picturesContainer.firstElementChild,
//          ];
//      }
//      applyClasses();
//  }
//  prevButton.addEventListener("click", () => {

//  })
//}


//nextButton.addEventListener("click", () => {
  
//})