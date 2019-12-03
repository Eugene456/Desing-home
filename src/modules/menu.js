const menu = () =>{
    const btnMenu = document.querySelector('.menu'),
    menuDialog = document.querySelector('.popup-dialog-menu'),
    closeMenu = menuDialog.querySelector('.close-menu'),
    menuNav = menuDialog.querySelector('.popup-menu-nav'),
    menuItems = menuDialog.querySelectorAll('.popup-menu-nav__item');
   
    btnMenu.addEventListener('click', () => {
                menuDialog.style.transform = 'translate3d(0,0,0)';
    });

    closeMenu.addEventListener('click', () => {
        menuDialog.removeAttribute('style');
    });

    menuNav.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        
        target = target.closest('.popup-menu-nav__item');
        menuItems.forEach((item, i) =>{
            if(target === item){
                menuDialog.removeAttribute('style');
                let a = target.querySelector('a'),
                 anchor = a.href.replace(/[^#]*(.*)/, '$1');
                const elem = document.querySelector(anchor);
                
                
                let intervalScroll,
                 scrollVert = 0,
                placeScroll = elem.getBoundingClientRect().top;
               
                const scrolling = () => {
                    intervalScroll = requestAnimationFrame(scrolling);
                                    
                    if(scrollVert < placeScroll){
                        window.scrollTo(0, scrollVert) ;
                        scrollVert += 100;
                    } else{
                        cancelAnimationFrame(intervalScroll);
                        scrollVert = 0;
                        
                    }
                };
                scrolling();
            }
        })
    });
}

export default menu;