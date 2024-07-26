window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.container');
    const line = document.querySelector('.universalLine')
    
    preloader.classList.add('inactive');
    mainContent.classList.add('active');
    line.classList.add('active');
    //subContent.classList.add('active');
})