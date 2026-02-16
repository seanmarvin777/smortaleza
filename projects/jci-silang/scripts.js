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