const moreInfo = document.querySelectorAll('.more-info');
const more = document.querySelectorAll('.list2');
const close = document.querySelectorAll('.fa-circle-xmark');
const list1 = document.querySelectorAll('.list1-container > :nth-child(1)');
const sideBar = document.querySelector('.side-bar');
const smallContainer = document.querySelector('.small-nav-container');
const display = document.querySelector('.small-duka');
const displaychild = document.querySelector('.small-duka-child');
const links = document.querySelectorAll('.links2 a');
const end = document.querySelector('.close');
for(let i = 0; i < moreInfo.length; i++){
    moreInfo[i].addEventListener('click', function(){
        for(let j = 0;j<moreInfo.length;j++){
            more[j].classList.add('more');
            list1[j].style.transform = 'scale(1)';
        }
        if(more[i].classList.contains('more')){
            more[i].classList.remove('more');
            list1[i].style.transform = 'scale(0)';
        }
    }) 
}
for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        if(!more[i].classList.contains('more')){
            more[i].classList.add('more');
            list1[i].style.transform = 'scale(1)';
        }
    }) 
}
sideBar.addEventListener('click', function(){
    smallContainer.classList.toggle('none');
});
end.addEventListener('click', function(){
    if(smallContainer.classList.contains('none')){
        smallContainer.classList.remove('none');
    }
    else{
        smallContainer.classList.add('none');
    }
})
display.addEventListener('click', function(){
    displaychild.classList.toggle('display-none');
});
links.forEach(function(e, index){
    e.addEventListener('click', function(){
        if(index != 0){
            smallContainer.classList.add('none');
        }
            
    })
})
window.addEventListener('beforeunload', function(){
    return('Are You sure you want to close this page?')
});