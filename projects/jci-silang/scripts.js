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
        function toggleMenu() {
            const isOpen = navMenu.classList.toggle('open');
            hamburgerBtn.classList.toggle('open', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        }

        function closeMenu() {
            navMenu.classList.remove('open');
            hamburgerBtn.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }

        // touch-action: manipulation on the button removes the 300ms delay,
        // so a plain click event works reliably on both mobile and desktop.
        hamburgerBtn.addEventListener('click', toggleMenu);

        // Close menu when a nav link is tapped/clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside the nav (desktop)
        document.addEventListener('click', (e) => {
            if (!hamburgerBtn.closest('nav').contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when tapping outside the nav on iOS —
        // click doesn't bubble from non-interactive elements, so touchstart is needed.
        document.addEventListener('touchstart', (e) => {
            if (!hamburgerBtn.closest('nav').contains(e.target)) {
                closeMenu();
            }
        }, { passive: true });
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