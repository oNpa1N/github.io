let was_i_here = "";
try{
    was_i_here = localStorage.getItem(1);
}
catch{}
if(was_i_here == 'ok'){
    alert("Снова привет)");
}
else{
    alert('Ты в первые на моем сайте, Хорошо провести время');
    localStorage.setItem(1,'ok');
}
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

