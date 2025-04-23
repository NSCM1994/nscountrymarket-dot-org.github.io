document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Optional: Change button text/icon for accessibility or visual cue
            // const isOpen = mainNav.classList.contains('active');
            // navToggle.setAttribute('aria-expanded', isOpen);
            // navToggle.innerHTML = isOpen ? '✕' : '☰'; // Change to X when open
        });

        // Close nav when a link is clicked (for single-page navigation)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    // Reset toggle icon if needed
                     // navToggle.innerHTML = '☰';
                }
            });
        });
    }

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Optional: Smooth scroll for anchor links ---
    // The `html { scroll-behavior: smooth; }` in CSS handles this in modern browsers.
    // This JS version is a fallback or for more control if needed later.
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a valid internal link and not just '#'
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                 // Close mobile nav if open after clicking a link (already done above)
                 if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                 }
            }
        });
    });
    */

});