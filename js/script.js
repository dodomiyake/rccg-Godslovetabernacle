// Slide rotation

var slides = document.getElementsByClassName("slide");
var sliderDots = [];
var rotator = setInterval(changeSlide, 5000);

function changeSlide() {
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("showing")) {
      slides[i].classList.remove("showing");
      var nextslide = (i + 1) % slides.length;
      slides[nextslide].classList.add("showing");
      updateDots(nextslide);
      break; // Exit the loop after changing the slide
    }
  }
}

function updateDots(index) {
  for (var g = 0; g < sliderDots.length; g++) {
    sliderDots[g].classList.remove("active");
  }
  sliderDots[index].classList.add("active");
}

// Navigation dots
for (let j = 0; j < slides.length; j++) {
  var dot = document.createElement("span");
  sliderDots.push(dot);
  document.getElementById("slider-dots").appendChild(sliderDots[j]);
  sliderDots[j].classList.add("dot");
  sliderDots[j].onclick = function () {
    for (var g = 0; g < slides.length; g++) {
      slides[g].classList.remove("showing");
    }
    slides[j].classList.add("showing");
    updateDots(j);
  };
}

// Previous/Next buttons
function prev() {
  var currentIndex = findCurrentIndex();
  var nextslide = (currentIndex - 1 + slides.length) % slides.length;
  changeSlideTo(nextslide);
}

function next() {
  var currentIndex = findCurrentIndex();
  var nextslide = (currentIndex + 1) % slides.length;
  changeSlideTo(nextslide);
}

function findCurrentIndex() {
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("showing")) {
      return i;
    }
  }
}

function changeSlideTo(index) {
  clearInterval(rotator);
  slides[findCurrentIndex()].classList.remove("showing");
  slides[index].classList.add("showing");
  updateDots(index);
  rotator = setInterval(changeSlide, 5000);
}

// Pause on hover
document.getElementById("slider").onmouseover = function () {
  clearInterval(rotator);
};

document.getElementById("slider").onmouseout = function () {
  clearInterval(rotator);
  rotator = setInterval(changeSlide, 5000);
};

// Arrow keys
document.addEventListener("keydown", function (key) {
  switch (key.keyCode) {
    case 37: // Left arrow key
      prev();
      break;
    case 39: // Right arrow key
      next();
      break;
  }
});




