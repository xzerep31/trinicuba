document.addEventListener("DOMContentLoaded", function() {
    const navbarBrand = document.querySelector('.navbar-brand');
    const defaultBanner = document.querySelector('.default-banner');

    function toggleNavbarVisibility() {
        const bannerVisible = defaultBanner.offsetHeight > 0;

        if (bannerVisible) {
            navbarBrand.style.opacity = '0';
            navbarBrand.style.transition = 'opacity 0.5s ease';
        } else {
            navbarBrand.style.opacity = '1';
            navbarBrand.style.transition = 'opacity 0.5s ease';
        }
    }

    // Initial check
    toggleNavbarVisibility();

    // Observe changes in the default-banner visibility
    const observer = new MutationObserver(toggleNavbarVisibility);
    observer.observe(defaultBanner, { attributes: true, childList: true, subtree: true });
});
