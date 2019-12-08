const desingAdd = () => {
    const link = document.querySelector('.link-list-designs'),
    modWin = document.querySelector('.popup-design'),
    close = modWin.querySelector('.close'),
    modNavList = modWin.querySelector('.nav-list'),
    modBtnItems = modNavList.querySelectorAll('.designs-nav__item'),
    slideWrap = modWin.querySelector('.popup-design-tab__item'),
    modTxt = slideWrap.querySelectorAll('.popup-design-text'),
    navList= document.querySelector('.nav-list-designs'),
    btnItem = navList.querySelectorAll('.designs-nav__item'),
    previews = document.querySelectorAll('.preview-block');

    link.addEventListener('click', () =>{
        modWin.style.visibility = 'initial';
    });
    close.addEventListener('click', () =>{
        modWin.removeAttribute('style');
        modBtnItems.forEach(item =>{
            item.classList.remove('active');
        })
    });


    navList.addEventListener('click', event =>{
        let target = event.target;
        
        btnItem.forEach((item, i) =>{
            if(item === target){
               previews.forEach((prevSl, k)=>{
                   prevSl.classList.remove('visible');
                   
                   if(k === i){
                        prevSl.classList.add('visible');
                   }
               });
            }
        });
    });


    modNavList.addEventListener('click', event => {
        let target = event.target;

        modBtnItems.forEach((item, i) => {
            item.classList.remove('active');
            modTxt[i].classList.remove('visible-content-block');
            if(item === target){
                item.classList.add('active');

                modTxt[i].classList.add('visible-content-block');
            }
        });
    });

}

export default desingAdd;