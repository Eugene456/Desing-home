const modPortfolio = () =>{
    const portfolioSlider = document.querySelector('.portfolio-slider'),
slides = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame'),
modPortfolio = document.querySelector('.popup-portfolio'),
close = modPortfolio.querySelector('.close'),
modalImg = modPortfolio.querySelectorAll('.popup-portfolio-slider__slide'),
modalText = modPortfolio.querySelectorAll('.popup-portfolio-text'),
arrowRight = document.getElementById('popup_portfolio_right'),
arrowLeft = document.getElementById('popup_portfolio_left'),
containCount = document.getElementById('popup-portfolio-counter'),
count = containCount.querySelector('.slider-counter-content__current'),
total = containCount.querySelector('.slider-counter-content__total');


let step = 0;

portfolioSlider.addEventListener('click', event => {
	let target = event.target;
	
	slides.forEach((item, s) =>{
		if(item === target){

            modPortfolio.style.visibility = 'initial';
            arrowLeft.style.display = 'none';
            if(s === 0) {
                arrowLeft.style.display = 'none';
            }
            modalText[0].style.display = 'flex';
            total.textContent = modalImg.length;
            count.textContent = s + 1;
            
            modalImg.forEach((img, i) =>{
                img.style.display = 'none';
                if(i === s){
                    img.style.display = 'flex';
                }
                return step = s;
            });
		}
	});
})

arrowRight.addEventListener('click', () => {
    arrowLeft.style.display = 'flex';
    modalImg[step].style.display = 'none';
    modalText[step].style.display = 'none';
	step++;
	modalImg[step].style.display = 'flex';
    modalText[step].style.display = 'flex';
    count.textContent = step + 1;

	if (step === modalText.length - 1){
		arrowRight.style.display = 'none';
	}

});

arrowLeft.addEventListener('click', () => {
    arrowRight.style.display = 'flex';
    modalImg[step].style.display = 'none';
    modalText[step].style.display = 'none';
	step--;
	modalImg[step].style.display = 'flex';
	modalText[step].style.display = 'flex';
    count.textContent = step + 1;

	if (step === 0){
		arrowLeft.style.display = 'none';
	}
});

close.addEventListener('click', () => {
    modPortfolio.removeAttribute('style');
});
};



export default modPortfolio;