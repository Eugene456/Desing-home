const menu = () =>{
    const btnMenu = document.querySelector('.menu'),
    menuDialog = document.querySelector('.popup-dialog-menu'),
    closeMenu = menuDialog.querySelector('.close-menu');

    btnMenu.addEventListener('click', () => {
                menuDialog.style.transform = 'translate3d(0,0,0)';
    });

    closeMenu.addEventListener('click', () => {
        menuDialog.removeAttribute('style');
    })
}

export default menu;