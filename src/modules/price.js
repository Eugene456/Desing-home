const price = () => {
    const modalPrice = document.querySelector('.popup-repair-types'),
    listMenu = document.querySelector('.link-list-menu'),
    repairTabsType = document.querySelector('.repair-types-tab'),
    listRepair = repairTabsType.querySelector('.link-list-repair'),
    menuDialog = document.querySelector('.popup-dialog-menu'),
    btnClose = modalPrice.querySelector('.close');    

    listMenu.addEventListener('click', () => {
        modalPrice.style.visibility = 'initial';
        menuDialog.removeAttribute('style');
    });
    
    listRepair.addEventListener('click', () => {
        modalPrice.style.visibility = 'initial';
        menuDialog.removeAttribute('style');
    });
    
    btnClose.addEventListener('click', () => {
        modalPrice.removeAttribute('style');
    });
    
}

export default price;