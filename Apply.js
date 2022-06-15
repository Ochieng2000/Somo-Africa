const sidebar = document.querySelector('.side-bar');
const links = document.querySelector('.nav-links-container');
const allinks = document.querySelectorAll('.links a');
const question = document.querySelectorAll('button');
const plus = document.querySelectorAll('.fa-solid');
const p = document.querySelectorAll('.p-container');
console.log(plus);
question.forEach(
    function(element, index, array){
        element.addEventListener('click', function(){
           p[index].classList.toggle('p-container2');
           if(plus[index+1].classList.contains('fa-plus')){
            plus[index+1].classList.remove('fa-plus');
            plus[index+1].classList.add('fa-minus');
           }
           else{
            plus[index+1].classList.add('fa-plus');
            plus[index+1].classList.remove('fa-minus');
           }         
        });
    }
);
plus.forEach(
    function(element, index, array){
        element.addEventListener('click', function(){
            p[index-1].classList.toggle('p-container2');
            if(plus[index].classList.contains('fa-plus')){
            plus[index].classList.remove('fa-plus');
            plus[index].classList.add('fa-minus');
           }
           else{
            plus[index].classList.add('fa-plus');
            plus[index].classList.remove('fa-minus');
           }     
        });
    }
);
sidebar.addEventListener('click', function(){
    links.classList.toggle('nav-links-container2');     
})
allinks.forEach(function(element, index){
    element.addEventListener('click', function(){
        links.classList.toggle('nav-links-container2');
    })
})