const consult = () =>{

        const body = document.querySelector('body'),
        btns = body.querySelectorAll('.button_wide'),
        modConsult = document.querySelector('.popup-consultation'),
        close = modConsult.querySelector('.close') ;
        
        body.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.button_wide');
            btns.forEach(item =>{
                if(item === target){
                    modConsult.style.visibility = 'initial';
                }
            })
        });

        close.addEventListener('click', () => {
            modConsult.removeAttribute('style');
        });
        
        const feedbackBlFm = body.querySelectorAll('.feedback-block__form'),
                feedbackForm = body.querySelectorAll('.feedback__form');

        const checkedForm = (form, tag)=>{
                body.addEventListener('click', event =>{
                    let target = event.target;
                    target = target.closest(tag);
                    form.forEach(item => {
                        if(item === target){
                            const btn = item.querySelector('button'),
                            checkbox = item.querySelector('.checkbox__input');
                           
                                                
                            const inputs = item.querySelectorAll('input');
                            
                            inputs.forEach(inp =>{
                                if (inp.name === 'phone'){
                                btn.setAttribute('disabled', 'disabled');
                                if (inp.value !== '' && checkbox.checked ){
                                    btn.removeAttribute('disabled');
                                }
                                }
                            });

                        }
                    });
                });
        }

        checkedForm(feedbackBlFm, '.feedback-block__form');
        checkedForm(feedbackForm, '.feedback__form');








}


export default consult;