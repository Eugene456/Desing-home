const formulaBlock = () => {
    const formula = document.getElementById('formula'),
    wrapperSmall = formula.querySelector('.wrapper_small'),
    formulaItem = document.querySelectorAll('.formula-item'),
    formulaPopup = formula.querySelectorAll('.formula-item-popup'),
    formulaSliderSlides = formula.querySelectorAll('.formula-slider__slide'),
    formulaSliderWrap = formula.querySelector('.formula-slider-wrap');
        
   wrapperSmall.addEventListener('mouseover', event => {
        let target = event.target;
        target = target.closest('.formula-item');
        
        formulaItem.forEach((item, i) =>{
            let textItem = item.querySelector('p');
            if (i <= 5){           
               formulaPopup[i].removeAttribute('style'); 
               textItem.removeAttribute('style'); 
            }
                  
            if(item === target){
               formulaPopup[i].style.visibility = 'initial';
               formulaPopup[i].style.opacity = 1;

               if(item.getBoundingClientRect().top < 200){                
                    textItem.style.transform  = "rotate(180deg)";
                    formulaPopup[i].style.transform  = "rotate(180deg)";
                    formulaPopup[i].style.bottom = '-180px'; 
               }
                
            }
            
        });
    });
    
    formulaSliderWrap.addEventListener('mouseover', event => {
        let target = event.target;
        target = target.closest('.formula-slider__slide');
        formulaSliderSlides.forEach((item,i) =>{
            let textItem = item.querySelector('p');
            formulaPopup[i].removeAttribute('style'); 
            textItem.removeAttribute('style'); 

            if(item === target){
                formulaPopup[i].style.visibility = 'initial';
                formulaPopup[i].style.opacity = 1;
 
                if(item.getBoundingClientRect().bottom < 200){                
                     textItem.style.transform  = "rotate(180deg)";
                     formulaPopup[i].style.transform  = "rotate(180deg)";
                     formulaPopup[i].style.bottom = '90px'; 
                }

        }
    });
    });
   

}

export default formulaBlock;