const allLinks = document.querySelectorAll('.link');
const allLinks2 = document.querySelectorAll('.links2');
const item = document.querySelectorAll('.notes-item');
const sidebartoggler1 = document.querySelector('.sidebar1');
const sidebartoggler = document.querySelector('.sidebar2');
const display = document.querySelector('.displayNone');
const display1 = document.querySelector('.left-side');
const bars = document.querySelector('.bar2');
const bar = document.querySelector('.bar');
const A = document.querySelector('.a2');
const B = document.querySelector('.b2');
const C = document.querySelector('.a');
const D = document.querySelector('.b');
allLinks[0].style.backgroundColor = "#FFC83B"

allLinks.forEach(function(e, index){
    e.addEventListener('click', function(){
        for(let i = 0; i < item.length; i++){
            item[i].classList.remove('active-page');
            allLinks[i].style.backgroundColor = "#ffefd5";
            
        }
        item[index].classList.add('active-page');
        allLinks[index].style.backgroundColor = "#FFC83B";
        display1.classList.toggle('set2');
        bar.classList.toggle('middle');
        C.classList.toggle('first');
        D.classList.toggle('last');
        
    })
});
allLinks2.forEach(function(f){
    f.addEventListener('click', function(){
        removeLink();
    });
});
sidebartoggler.addEventListener('click', function(){
    removeLink();
});
sidebartoggler1.addEventListener('click', function(){
    display1.classList.toggle('set2');
    bar.classList.toggle('middle');
    C.classList.toggle('first');
    D.classList.toggle('last');
});

function removeLink(){
    display.classList.toggle('set');
    bars.classList.toggle('middle');
    A.classList.toggle('first');
    B.classList.toggle('last');
};

