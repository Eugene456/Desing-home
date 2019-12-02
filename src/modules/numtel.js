'use strict';

const telNumber = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
    phone = document.querySelector('.header-contacts__phone-number-accord'),
    phoneLink = phone.querySelector('a');

    arrow.addEventListener('click', () =>{
        if (phone.style.top === '0px'){
            phone.style.top = '27px';
            phoneLink.style.opacity = 1;
        } else{
            phone.style.top = '0px';
            phoneLink.style.opacity = 0;
        }
    });

}

export default telNumber;