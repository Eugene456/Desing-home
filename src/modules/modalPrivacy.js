const modalPrivacy = () =>{
    const body = document.querySelector('body'),
    links = document.querySelectorAll('.link-privacy'),
    modPriv = document.querySelector('.popup-privacy'),
    close = modPriv.querySelectorAll('.close');

    body.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.link-privacy');
        links.forEach(item => {
            if(item === target){
                modPriv.style.visibility = 'initial';
            }   
        });
    });

    modPriv.addEventListener('click', event =>{
        let target = event.target;
        close.forEach(item =>{
            if(item === target){
                modPriv.removeAttribute('style');
            }
        });
    });
    
   

}

export default modalPrivacy;