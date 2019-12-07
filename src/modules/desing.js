const desingAdd = () => {
    const navList = document.querySelector('.nav-list-designs'),
    btnItem = document.querySelectorAll('.designs-nav__item'),
    previews = document.querySelectorAll('.preview-block');

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
}


export default desingAdd;