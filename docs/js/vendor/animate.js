// script.js
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const navbarIcon = document.getElementById('navbar-icon');
    const scrollPosition = window.scrollY;

    // Calculate the position for the logo to move to the navbar icon
    const navbarIconRect = navbarIcon.getBoundingClientRect();
    const bannerRect = logo.getBoundingClientRect();

    if (scrollPosition > bannerRect.bottom) {
        const translateX = navbarIconRect.right - (bannerRect.right + bannerRect.width / 2);
        const translateY = navbarIconRect.top - (bannerRect.top + bannerRect.height / 2);
        logo.style.transform = `translate(${translateX}px, ${translateY}px)`;
    } else {
        logo.style.transform = 'translate(0, 0)';
    }
});