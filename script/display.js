let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
const phoneDisplayWidth = 515;

const addMenuButton = () => {
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.innerHTML = `<img src="../images/menu.svg">`
    document.querySelector('.header').appendChild(menuButton);
};

if (width <= phoneDisplayWidth){
    addMenuButton();
}