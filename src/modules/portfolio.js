const sliderPorfolio = ( wrap, slide, arrR, arrL) =>{
    const wrapper = document.querySelector(wrap),
    items = wrapper.querySelectorAll(slide),
    arrRight = document.getElementById(arrR),
    arrLeft = document.getElementById(arrL);

   

const pushArrows = (current) => {
  
  
  let step = 0,
  position = 1;
  
  arrRight.addEventListener('click', () => {

    let border = 0;
    if (window.screen.width > 1024){
        border = 3;
      }else if (window.screen.width > 901){
        border = 2;
      } else if (window.screen.width < 901){
         border = 1;
      }

     
      arrLeft.style.display = 'flex';
      items[step].style.display = 'none';
      step++;
      
      
   if(step === items.length - border){
    arrRight.style.display = 'none';
   } 
   if(current){
   current.textContent = position + step;
  }
  });

  arrLeft.addEventListener('click', ()=>{
    arrRight.style.display = 'flex';
    
    step--;
    items[step].style.display = 'flex';
    
     if(step === 0){
    arrLeft.style.display = 'none';
   } 
   if(current){
   current.textContent = position + step;
  }
  });
};
  pushArrows();

  if(window.screen.width < 575){
    const wrapCurrents = document.getElementById('portfolio-counter'),
          current = wrapCurrents.querySelector('.slider-counter-content__current'),
          total = wrapCurrents.querySelector('.slider-counter-content__total');
          total.textContent = items.length;
          const border = 1;
          
    pushArrows(current);
  }

}

if (window.screen.width > 575){
sliderPorfolio('.portfolio-slider', 
  '.fade-tab', 
  'portfolio-arrow_right', 
  'portfolio-arrow_left');
} else{
sliderPorfolio('.portfolio-slider-mobile',
  '.portfolio-slider__slide-frame',
  'portfolio-arrow-mobile_right',
  'portfolio-arrow-mobile_left');
}
  
  export default portfolio;