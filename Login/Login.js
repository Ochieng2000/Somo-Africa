const input = document.querySelector('#password');
        const eye = document.querySelector('.eye2');
         eye.style.display = "none";
        input.onkeyup = function(){
            if (input.value == "") {
                eye.style.display = "none";
            }
            else {
                eye.style.display = "inline";
            }
        }        
            eye.addEventListener('click', function () {
            
                if(eye.classList.contains('fa-eye')){
                    eye.classList.remove('fa-eye');
                    eye.classList.add('fa-eye-slash');
                    input.type = "text";
                }
                else{
                    eye.classList.remove('fa-eye-slash');
                    eye.classList.add('fa-eye');
                    input.type = "password";
                }                        
            })
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