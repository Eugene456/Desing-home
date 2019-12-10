const typesRepair = () => {
    const slaiderRepair = ( list, buttons, slider, arrR, arrL, wrapCur, mark)=>{
    const navList = document.querySelector(list),
    btnsRepair = navList.querySelectorAll(buttons),
    itemsSlider = document.querySelector(slider).children,
    design = document.getElementById('designs'),
    //for slider
    
    arrowLeft = document.getElementById(arrL),
    arrowRight = document.getElementById(arrR),
    wrapCurrent = document.getElementById(wrapCur),
    sliderCurrent = wrapCurrent.querySelector('.slider-counter-content__current'),
    sliderTotal = wrapCurrent.querySelector('.slider-counter-content__total'),
    previewsBlock = document.querySelectorAll('.preview-block'),
    link = document.querySelector('.link-list-designs'),
    popupSliders = document.querySelector('.popup-design-slider').children,
    desingTxt = document.querySelectorAll('.popup-design-text'),
    modWrapCurr = document.getElementById('popup-designs-counter'),
    modTotal =  modWrapCurr.querySelector('.slider-counter-content__total'),
    modBtns = document.querySelectorAll('.designs-nav__item_popup');
    
    
   
       
    
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
                    return activeBlock = [activeSlider, k];
                    }
                }
            }
        });
        
    });

const activePrevSlide = (active)=>{
if(mark === 2){
   
    const prevSlides = previewsBlock[activeBlock[1]].children;
    for(let j = 0; j < prevSlides.length; j++){
        let child = prevSlides[j].querySelector('div');
        child.classList.remove('preview_active');
        if(j === active ){
            child.classList.add('preview_active');
        }
    
    }
}
};

if( mark === 2){
   
    design.addEventListener('click', () => {
           
            previewsBlock[activeBlock[1]].addEventListener('click', event =>{
                
                let target = event.target;
                
                target = target.closest('.preview-block__item');
                let prevSlides = previewsBlock[activeBlock[1]].children;
            
                for(let k = 0; k < prevSlides.length; k++){
                    activeBlock[0].children[k].style.display = 'none';
                    if(prevSlides[k] === target){
                        
                        activeBlock[0].children[k].style.display = 'flex';
                        activePrevSlide(k);
                        
                        if(k === activeBlock[0].children.length - 1){
                            arrowRight.style.display = 'none';
                            arrowLeft.style.display = 'flex';

                        } else if (step === 0){
                            arrowLeft.style.display = 'none';
                            arrowRight.style.display = 'flex';
                        }else{
                            arrowLeft.style.display = 'flex';
                            arrowRight.style.display = 'flex';
                        }
                        return step = k;
                    }
                }
            
            });
        
    });
    link.addEventListener('click', () =>{
            
        for (let i = 0; i < popupSliders.length; i++){
            popupSliders[i].style.display = 'none';
            desingTxt[i].classList.remove('visible-content-block'); 
            modBtns[i].classList.remove('active');
            if (i === activeBlock[1]){
                popupSliders[i].style.display = 'flex'; 
                desingTxt[i].classList.add('visible-content-block'); 
                modTotal.textContent = popupSliders[i].children.length;
                modBtns[i].classList.add('active');
                
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
        activePrevSlide(step);
        
    });
    
    
    arrowLeft.addEventListener('click', () =>{
        arrowRight.style.display = 'flex';
        if (step === 1){
            arrowLeft.style.display = 'none';
        }
        
        step--;
        activeBlock[0].children[step].style.display = 'flex';
        sliderCurrent.textContent = step + 1;
        activePrevSlide(step);
    });

    
};


    slaiderRepair('.nav-list-repair',
    '.repair-types-nav__item',
    '.repair-types-slider',
    'repair-types-arrow_right',
    'repair-types-arrow_left',
    'repair-counter'
       
    );
    
    slaiderRepair('.nav-list-designs',
    '.designs-nav__item',
    '.designs-slider',
    'design_right',
    'design_left',
    'designs-counter',
    2
    );

    slaiderRepair('#nav-list-popup-designs',
        '.designs-nav__item',
        '.popup-design-slider',
        'popup_design_right',
        'popup_design_left',
        'popup-designs-counter'
    );



};
export default typesRepair;




