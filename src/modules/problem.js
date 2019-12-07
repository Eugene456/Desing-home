const problem = () =>{
    const blockProblem = document.getElementById('problems'),
    wrapMid = blockProblem.querySelector('.wrapper_middle'),
    probItems = wrapMid.querySelectorAll('.problems-item'),
    probPopups = blockProblem.querySelectorAll('.problems-item-popup'),
    problemSlider = blockProblem.querySelector('.problems-slider'),
    problSlides = problemSlider.querySelectorAll('.problems-item');
  

    blockProblem.addEventListener('mouseover', event => {
        let target = event.target;

        target = target.closest('.problems-item');
        probItems.forEach((item, i)=>{
            probPopups[i].removeAttribute('style');
            if(item === target){
                probPopups[i].style.visibility = 'initial';
                probPopups[i].style.opacity = 1;
                if(i !== 0){
                   
                    if(item.getBoundingClientRect().top < 300){                
                        probPopups[i].style.transform  = "rotate(180deg)";
                        probPopups[i].style.bottom = '-400%'; 
                        for (let k = 0; k < probPopups[i].children.length; k++){
                            
                            probPopups[i].children[k].style.transform  = "rotate(180deg)";
                        }
                        
                    }
                }
            
            }

        });
    });

    problSlides.forEach(item =>{
        item.style.margin = 0;
    });

    problemSlider.addEventListener('click', event =>{
        let target = event.target;
        target = target.closest('.problems-item');
        problSlides.forEach((item, i) =>{
            item.classList.remove('active-item');
            if (item === target){
                item.classList.add('active-item');

            
            }
        });
    })

    
   
  
    
}

 export default problem;