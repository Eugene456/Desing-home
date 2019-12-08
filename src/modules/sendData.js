const sendData = ()=>{
    const feedbackBlFm = document.querySelectorAll('.feedback-block__form'),
    feedbackForm = document.querySelectorAll('.feedback__form'),
    thanks = document.querySelector('.popup-thank'),
    close = document.querySelector('.close-thank');




    const sendForm = (form) =>{



    form.addEventListener('submit', (event) => {
    	
        event.preventDefault();

        
        const formData = new FormData(form);
        let body = {};
        for (let val of formData.entries()){
            body[val[0]] = val[1];
        }
        postData(body)
            .then (()=>{
                thanks.style.visibility = 'initial';
                const inputs = form.querySelectorAll('input');

                inputs.forEach(item => {
                    if (item.type === 'text'){
                        item.value = '';
                    };
                    if(item.type === 'checkbox'){
                        item.removeAttribute('checked');
                    }
                });
            })
            .catch (error =>{
                console.error(error);
            });
    });

    const postData = (body) => {
        return new Promise((resolve,reject) =>{

            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
            
            if(request.readyState !== 4){
                return;
            }
            if(request.status === 200){
               resolve();
            } else {
                reject(request.status);
            }
        
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));

        });
        
    };
};



feedbackBlFm.forEach(item => {
    sendForm(item);
})

feedbackForm.forEach(item => {
    sendForm(item);
})


    close.addEventListener('click', () => {
        thanks.removeAttribute('style');
    })
}

export default sendData;