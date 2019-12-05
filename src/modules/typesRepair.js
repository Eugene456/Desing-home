const typesRepair = () => {
    const navList = document.querySelector('.nav-list-repair'),
    btnsRepair = document.querySelectorAll('.repair-types-nav__item'),
    itemsSlider = document.querySelector('.repair-types-slider').children,
    //for slider
    
    arrowLeft = document.getElementById('repair-types-arrow_left'),
    arrowRight = document.getElementById('repair-types-arrow_right'),
    sliderCurrent = document.querySelector('.slider-counter-content__current'),
    sliderTotal = document.querySelector('.slider-counter-content__total');
    
    let activeSlider = itemsSlider[0],
    step = 0,
    current = 0,
    total = 0;

    sliderCurrent.textContent = step + 1;
    sliderTotal.textContent = activeSlider.children.length;
    arrowLeft.style.display = 'none';
    
    navList.addEventListener('click', event => {
        let target = event.target;
        
        for(let v = 0; v < activeSlider.children.length; v++){
            activeSlider.children[v].removeAttribute('style');
        }
        step = 0;
        sliderCurrent.textContent = 1;
        arrowRight.style.display = 'flex';
        arrowLeft.style.display = 'none';
        
        btnsRepair.forEach((item, i) =>{
            item.classList.remove('active');
            if(item === target){
                item.classList.add('active');
                
                for(let k = 0; k < itemsSlider.length; k++){
                    itemsSlider[k].style.display = 'none';
                    if(k === i){
                        itemsSlider[k].style.display = 'block';
                        activeSlider = itemsSlider[k];
                       sliderTotal.textContent = activeSlider.children.length;
                       return activeSlider;
                    }
                }
            }
        });
        
    });


           
    arrowRight.addEventListener('click', () => {
       arrowLeft.style.display = 'flex';
       activeSlider.children[step].style.display = 'none';
       if(step === activeSlider.children.length - 2){
           arrowRight.style.display = 'none';
       }
        step++;
        sliderCurrent.textContent = step + 1;
        
    });
    
    
    arrowLeft.addEventListener('click', () =>{
        arrowRight.style.display = 'flex';
        if (step === 1){
            arrowLeft.style.display = 'none';
        }
        step--;
        activeSlider.children[step].style.display = 'flex';
        sliderCurrent.textContent = step + 1;
    })
}


export default typesRepair;