const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sideMenu = document.getElementById('side-menu');
const mainDiv = document.getElementById('main');

openBtn.addEventListener('click', () => {
    sideMenu.style.width = '250px';
    /*mainDiv.style.marginLeft = '250px';*/
});
closeBtn.addEventListener('click', () => {
    sideMenu.style.width = '0';
    /*mainDiv.style.marginLeft = '0';*/
});