const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    console.log('open hambuger');

    if(header.classList.contains('open')) {
        header.classList.remove('noscroll');
        header.classList.remove('open');
        
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { 
        body.classList.add('noscroll');
        header.classList.add('open');
        
        fadeElements.forEach(function(element) {
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    });
  }
});