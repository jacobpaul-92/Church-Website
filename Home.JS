document.querySelector(".hamburger-menu").addEventListener("click", () => {document.querySelector(".container").classList.toggle("change");});

const hamburgerMenu = document.querySelector('.hamburger-menu');
let menuOpen = false;
hamburgerMenu.addEventListener('click', () => {
    if(!menuOpen) {
        hamburgerMenu.classList.add('open');
        menuOpen = true;
    } else {
        hamburgerMenu.classList.remove('open');
        menuOpen = false;
    }
});
