const sidebar = document.querySelector('.side-bar');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.allLinks');

sidebar.addEventListener('click', function(){
    navLinks.classList.toggle('nav-links2');   
});
links.forEach( function(e){
    e.addEventListener('click',function(){
        navLinks.classList.toggle('nav-links2');
    })
});