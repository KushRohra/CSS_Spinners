var para = document.querySelector('.main p');
var mainClass = document.querySelector('.main');

para.style.display = 'none';
mainClass.classList.add('spinner-2');

setTimeout( ()=> {
    para.style.display = 'block';
    mainClass.classList.remove('spinner-2');
}, 2000)