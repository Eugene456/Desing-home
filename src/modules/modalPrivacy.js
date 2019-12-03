const modalPrivacy = () =>{
    const body = document.querySelector('body'),
    links = document.querySelectorAll('.link-privacy'),
    modPriv = document.querySelector('.popup-privacy'),
    close = modPriv.querySelector('.close');

    body.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.link-privacy');
        links.forEach(item => {
            if(item === target){
                modPriv.style.visibility = 'initial';
            }   
        });
    });

    close.addEventListener('click', () => {
        modPriv.removeAttribute('style');
    });

}

export default modalPrivacy;