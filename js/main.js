let elHeader = document.querySelector(".header");
let elHeaderHamburgBtn = document.querySelector(".header__hamburg-btn");

elHeaderHamburgBtn.addEventListener('click', function(){
    elHeader.classList.toggle("header--open");
})