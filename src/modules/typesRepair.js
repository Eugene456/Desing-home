const typesRepair = () => {
    const slaiderRepair = ( list, buttons, slider, arrR, arrL, wrapCur, currentDiv, totalDiv, mark)=>{
    const navList = document.querySelector(list),
    btnsRepair = document.querySelectorAll(buttons),
    itemsSlider = document.querySelector(slider).children,
    //for slider
    
    arrowLeft = document.getElementById(arrL),
    arrowRight = document.getElementById(arrR),
    wrapCurrent = document.getElementById(wrapCur),
    sliderCurrent = wrapCurrent.querySelector(currentDiv),
    sliderTotal = wrapCurrent.querySelector(totalDiv),
    previewsBlock = document.querySelectorAll('.preview-block');
    
   
    

    
        let activeSlider,
        step = 0,
        current = 0,
        total = 0,
        activeBlock = [itemsSlider[0], 0];

        sliderCurrent.textContent = step + 1;
        sliderTotal.textContent = activeBlock[0].children.length;
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'flex';
        navList.addEventListener('click', event => {
            let target = event.target;
            
            for(let v = 0; v < activeBlock[0].children.length; v++){
                activeBlock[0].children[v].removeAttribute('style');
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
                        return activeBlock =[activeSlider, k];
                        }
                    }
                }
            });
            
        });

const activePrevSlide = ()=>{
    if(mark === 2){
        const prevSlides = previewsBlock[activeBlock[1]].children;
        for(let j = 0; j < prevSlides.length; j++){
            let child = prevSlides[j].querySelector('div');
            child.classList.remove('preview_active');
            if(j === step){
                child.classList.add('preview_active');
            }
        
        }
    }
};

    if( mark === 2){
        previewsBlock[activeBlock[1]].addEventListener('click', event =>{
            
            let target = event.target;
            target = target.closest('.preview-block__item');
            let prevSlides = previewsBlock[activeBlock[1]].children;
           
            for(let k = 0; k < prevSlides.length; k++){
                activeBlock[0].children[k].style.display = 'none';
                if(prevSlides[k] === target){
                    
                    activeBlock[0].children[k].style.display = 'flex';
                }
            }
           
        });
    }
    arrowRight.addEventListener('click', () => {
            
        arrowLeft.style.display = 'flex';
        activeBlock[0].children[step].style.display = 'none';
        if(step === activeBlock[0].children.length - 2){
            arrowRight.style.display = 'none';
        }
            step++;
            sliderCurrent.textContent = step + 1;
            activePrevSlide();
            
        });
        
        
        arrowLeft.addEventListener('click', () =>{
            arrowRight.style.display = 'flex';
            if (step === 1){
                arrowLeft.style.display = 'none';
            }
            console.log(activeBlock[0]);
            step--;
            activeBlock[0].children[step].style.display = 'flex';
            sliderCurrent.textContent = step + 1;
            activePrevSlide();
        });

        
    };

    slaiderRepair('.nav-list-repair',
    '.repair-types-nav__item',
    '.repair-types-slider',
    'repair-types-arrow_right',
    'repair-types-arrow_left',
    'repair-counter',
    '.slider-counter-content__current',
    '.slider-counter-content__total'
    );
    
    slaiderRepair('.nav-list-designs',
    '.designs-nav__item',
    '.designs-slider',
    'design_right',
    'design_left',
    'designs-counter',
    '.slider-counter-content__current',
    '.slider-counter-content__total',
    2
    );



};
export default typesRepair;




