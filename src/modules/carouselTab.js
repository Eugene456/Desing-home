const sliderCarouselTab = (container, items, arrLeft, arrRight) =>{


    const repairTabContain = document.querySelector(container),
        repairItems = repairTabContain.querySelectorAll(items),
        arrowLeft = document.getElementById(arrLeft),
        arrowRight = document.getElementById(arrRight); 

    let stepWidth = 100/repairItems.length,

    position = stepWidth;
    
    let step = 0,
    borderLeft,
    borderRight;

    if(window.screen.width < 576){
      borderRight = 0;
      borderLeft = 1;
    }else if(window.screen.width < 768){
      borderRight = 1;
      borderLeft = 2;
    }else if(window.screen.width < 1024){
      borderRight = 2;
      borderLeft = 3;
    }
    

      arrowRight.addEventListener('click', () =>{
         step++;
        position = stepWidth * step;
        if (step < repairItems.length){
          repairTabContain.style.transform = `translateX(-${position}%)`;
        }
          

        if (step === repairItems.length - borderRight){
          position = stepWidth;
          step = 0;
          repairTabContain.style.transform = `translateX(0%)`;
        }
         
      })
      
      arrowLeft.addEventListener('click', () =>{
        
            step--;
             position = stepWidth * step;
        if (step >= 0){
          repairTabContain.style.transform = `translateX(-${position}%)`;
        }
                

        if (step < 0){
          step = repairItems.length - borderLeft;
          position = stepWidth * step;
          
          repairTabContain.style.transform = `translateX(-${position}%)`;
        }
      });
      
  }

sliderCarouselTab ('.nav-list-repair', 
  '.repair-types-nav__item', 
  'nav-arrow-repair-left_base', 
  'nav-arrow-repair-right_base');

sliderCarouselTab ('#scheme-list', 
  '.scheme-nav__item', 
  'nav-arrow-scheme_left', 
  'nav-arrow-scheme_right');

sliderCarouselTab ('#designs-list', 
  '.designs-nav__item_base', 
  'nav-arrow-designs_left', 
  'nav-arrow-designs_right');

  sliderCarouselTab('#nav-list-popup-designs',
  '.designs-nav__item',
  'nav-arrow-popup-designs_left',
  'nav-arrow-popup-designs_right'

  )

  setTimeout(() => {
  sliderCarouselTab('.nav-list-popup-repair',
  '.popup-repair-types-nav__item',
  'nav-arrow-popup-repair_left',
  'nav-arrow-popup-repair_right'

  )},3000)
  export default sliderCarouselTab;