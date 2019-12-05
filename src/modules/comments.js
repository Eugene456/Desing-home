const comments = () => {
    const reviewsSlider = document.querySelector('.reviews-slider'),
    reviewsSlides = document.querySelectorAll('.reviews-slider__slide'),
    arrRight = document.getElementById('reviews-arrow_right'),
    arrLeft = document.getElementById('reviews-arrow_left');
    
    let step = 0;
    arrLeft.style.display ='none';
    reviewsSlides.forEach((item, i) => {
    
      item.style.display = 'none';
      if(i === 0) {
        item.style.display = 'flex';
      }
    })
    
    arrRight.addEventListener('click', () => {
      arrLeft.style.display ='flex';
      step++;
      reviewsSlides.forEach((item, i) =>{
        item.style.display = 'none';
        if (i === step){
          item.style.display = 'flex';
        }
      })
    
      if(step === reviewsSlides.length - 1){
        arrRight.style.display ='none';
      }
    })
    
    arrLeft.addEventListener('click', () =>{
       arrRight.style.display ='flex';
        step--;
      reviewsSlides.forEach((item, i) =>{
        item.style.display = 'none';
        if (i === step){
          item.style.display = 'flex';
        }
      })
      if(step === 0){
        arrLeft.style.display ='none';
      }
    })
    }
    
   
    
    export default comments;