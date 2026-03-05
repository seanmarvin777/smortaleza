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
        let touchFired = false;

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

        // iOS touch fallback — fires before the 300ms synthetic click
        hamburgerBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            touchFired = true;
            toggleMenu();
        });

        // Desktop click (also fires on iOS if touchend didn't handle it)
        hamburgerBtn.addEventListener('click', () => {
            if (touchFired) { touchFired = false; return; }
            toggleMenu();
        });

        // Close menu when a nav link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
            link.addEventListener('touchend', closeMenu);
        });

        // Close menu when clicking outside the nav (desktop)
        document.addEventListener('click', (e) => {
            if (!hamburgerBtn.closest('nav').contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when tapping outside the nav (iOS — click doesn't fire on non-interactive elements)
        document.addEventListener('touchstart', (e) => {
            if (!hamburgerBtn.closest('nav').contains(e.target)) {
                closeMenu();
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