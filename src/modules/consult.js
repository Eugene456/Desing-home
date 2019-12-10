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
            });

        });

        modConsult.addEventListener('click', event =>{
            let target = event.target;
            target = target.closest('.feedback-wrap');
            if(!target){
                modConsult.removeAttribute('style');
            }
        });

        close.addEventListener('click', () => {
            modConsult.removeAttribute('style');
        });
        
        

        const feedbackBlFm = body.querySelectorAll('.feedback-block__form'),
                feedbackForm = body.querySelectorAll('.feedback__form');
        let message = 0;
        const checkedForm = (form, tag)=>{
                body.addEventListener('click', event =>{
                    let target = event.target;
                    target = target.closest(tag);
                    form.forEach(item => {
                        if(item === target){
                            const btn = item.querySelector('button'),
                            checkbox = item.querySelector('.checkbox__input');
                           
                                                
                            const inputs = item.querySelectorAll('input'),
                            attention = item.querySelector('.attention');
                            
                            
                            if (!checkbox.checked){
                                if(!attention){
                                    let div = document.createElement('div');
                                    div.classList.add('attention');
                                    div.textContent = 'Поставьте галочку о принятии соглашения конфиденциальности и заполните поле.';
                                    div.style.width = '55%';
                                    div.style.color = 'red';
                                    item.appendChild(div);
                                    
                                }
                            }

                            inputs.forEach(inp =>{
                                if (inp.name === 'phone' || inp.name === 'name'){
                                btn.setAttribute('disabled', 'disabled');
                                if (inp.value !== '' && checkbox.checked ){
                                    btn.removeAttribute('disabled');
                                    if (attention){
                                        attention.remove();
                                    }
                                    
                                    
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