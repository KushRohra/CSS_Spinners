var para = document.querySelector('.main p');
var mainClass = document.querySelector('.main');

para.style.display = 'none';
mainClass.classList.add('spinner-1');

setTimeout( ()=> {
    para.style.display = 'block';
    mainClass.classList.remove('spinner-1');
}, 2000)