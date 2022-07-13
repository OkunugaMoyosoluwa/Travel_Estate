//Function expression to select Elements
const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement( '.open').addEventListener('click', () => {
    selectElement ( '.nav-list').classList.add('active');
});
//open the menu on click
selectElement( '.close').addEventListener('click', () => {
    selectElement ( '.nav-list').classList.remove('active');
});

// scrolls
window.sr = ScrollReveal();

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    // distance: '.5rem',
    delay: 900
});

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    // distance: '1rem',
    delay: 1200
});
