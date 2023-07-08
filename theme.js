function toggleDarkMode() {
    const body = document.body;
    const toggleSlider = document.querySelector('.navbar-toggle-slider');
    body.classList.toggle('dark-mode');
    toggleSlider.classList.toggle('dark');
}