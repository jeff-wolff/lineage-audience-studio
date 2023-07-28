const menuBtn = document.querySelector('#navOpen');
const menuCloseBtn = document.querySelector('#navClose');

const navMenu = document.querySelector('.nav');
const menuItems = document.querySelectorAll('.menu-item');
const socialMenu = document.querySelector('.social-nav');

let header = document.querySelector('header'),
body = document.querySelector('body');



function init() {
    // Also set our CSS variable, so other elements can reference
    // the header offset from the window top in CSS (eg body top padding)
    const root = document.documentElement;
    root.style.setProperty('--header-height', `${header.offsetHeight}px`);

    // Listen for browser width (and possible banner height) changes
    window.addEventListener('resize', (event) => {
        root.style.setProperty('--header-height', `${header.offsetHeight}px`);
    });

    // Navigation
    menuBtn.addEventListener('click', () => {
        openNav();
    });
  
    menuCloseBtn.addEventListener('click', () => {
        closeNav();    
    });

    function openNav() {
        body.style.overflowY = 'hidden';
        navMenu.classList.add('--open');
        setTimeout(() => {            
            menuItems.forEach((item) => {
                flipCard(item);
            });
            
            socialMenu.classList.add('--fadein');
        },50)
    };
  
    function closeNav() {
        body.style.overflowY = 'visible';
        navMenu.classList.remove('--open');
        
        menuItems.forEach((item) => {
            flipCard(item);
        });
    };


    function flipCard(item) {
        const card = item.querySelector('.card');
        card.classList.toggle('flipped');
    }


}

window.addEventListener('load', init);