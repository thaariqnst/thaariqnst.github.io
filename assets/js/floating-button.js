const floating = document.querySelector('.floating-button');

window.addEventListener('scroll', e => {
    if(window.scrollY > 70){
        floating.classList.add('floating-button-on-scroll')
    }else{
        floating.classList.add('floating-button-on-scroll')
    }
});