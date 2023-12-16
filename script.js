ScrollReveal({ 
    //reset: true,
    distance: '150px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.h1', { origin: 'top' });
ScrollReveal().reveal('.container_item', { origin: 'bottom' });
ScrollReveal().reveal('.container_about_p, .works', { origin: 'left' });
ScrollReveal().reveal('.img_about, .container_item_p', { origin: 'right' });