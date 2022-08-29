const images = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
let position = 0;

let nextImage = () => {
  images[position].style.display = "none";
  position++;
  images[position].style.display = "block";
  images[position].style.animation = "fadeIn 1s";
};

console.log(position);
nextButton.addEventListener("click", () => {
  if (position === images.length - 1) {
    position = 0;
    images[images.length - 1].style.display = "none";
    images[0].style.display = "block";
  } else {
    nextImage();
  }
  console.log(position);
});

function prevImage() {
  position--;
  images[position + 1].style.display = "none";
  images[position].style.display = "block";
}

prevButton.addEventListener("click", function () {
  if (position === 0) {
    position = images.length - 1;
    images[0].style.display = "none";
    images[position].style.display = "block";
    images[position].style.animation = "fadeIn 1s";
  } else {
    prevImage();
  }
  console.log(position);
});
