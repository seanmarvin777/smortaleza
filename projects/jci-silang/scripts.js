const slides = document.querySelectorAll('.photo-slideshow .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

// Auto slideshow every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Simple slider for about-photo-slider
const aboutSlides = document.querySelectorAll('.about-photo-slider .about-slide');
let aboutCurrent = 0;

function showAboutSlide(idx) {
    aboutSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === idx) slide.classList.add('active');
    });
}

setInterval(() => {
    aboutCurrent = (aboutCurrent + 1) % aboutSlides.length;
    showAboutSlide(aboutCurrent);
}, 3000);


// Responsive platinum-container image activation
// Add this script to your HTML after the platinum-container markup

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.platinum-container');
  if (!container) return;
  const images = container.querySelectorAll('img');

  // Set the first image as active by default
  if (images.length > 0) {
    images[0].classList.add('active');
  }

  images.forEach((img, idx) => {
    img.addEventListener('mouseenter', function () {
      images.forEach(i => i.classList.remove('active'));
      img.classList.add('active');
    });
    img.addEventListener('mouseleave', function () {
      images.forEach(i => i.classList.remove('active'));
      if (images[0]) images[0].classList.add('active');
    });
    img.addEventListener('click', function () {
      images.forEach(i => i.classList.remove('active'));
      img.classList.add('active');
    });
  });
});
