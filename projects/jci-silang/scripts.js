// JCI Silang Pasimuno - Combined Scripts

// Generic slideshow function
function startSlideshow(slides, interval = 4000) {
    if (!slides || slides.length === 0) return;

    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, interval);
}

document.addEventListener('DOMContentLoaded', () => {
    // Hero slideshow (index.html)
    const heroSlides = document.querySelectorAll('.photo-slideshow .slide');
    startSlideshow(heroSlides, 4000);

    // About photo slider
    const aboutSlides = document.querySelectorAll('.about-photo-slider .about-slide');
    startSlideshow(aboutSlides, 3500);

    // Awards photo rotator
    const awardPhotos = document.querySelectorAll('.award-photo');
    startSlideshow(awardPhotos, 3000);
});