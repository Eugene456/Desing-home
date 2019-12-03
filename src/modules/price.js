const price = () => {
    const modalPrice = document.querySelector('.popup-repair-types'),
    listMenu = document.querySelector('.link-list-menu'),
    repairTabsType = document.querySelector('.repair-types-tab'),
    listRepair = repairTabsType.querySelector('.link-list-repair'),
    btnClose = modalPrice.querySelector('.close');    

        console.log(listRepair);
    listMenu.addEventListener('click', () => {
        modalPrice.style.visibility = 'initial';
    });
    
    listRepair.addEventListener('click', () => {
        modalPrice.style.visibility = 'initial';
    });
    
    btnClose.addEventListener('click', () => {
        modalPrice.removeAttribute('style');
    });
    
}

export default price;