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
    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            hamburgerBtn.classList.toggle('open', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when a nav link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburgerBtn.classList.remove('open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside the nav
        document.addEventListener('click', (e) => {
            if (!hamburgerBtn.closest('nav').contains(e.target)) {
                navMenu.classList.remove('open');
                hamburgerBtn.classList.remove('open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

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