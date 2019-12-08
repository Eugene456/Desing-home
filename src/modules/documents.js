const documents = () => {
    const transpSlaider = document.querySelector('.transparency-slider'),
transpItems = transpSlaider.querySelectorAll('.transparency-item'),
arrRight = document.getElementById('transparency-arrow_right'),
arrLeft = document.getElementById('transparency-arrow_left'),


//модальное окно
modTransp = document.querySelector('.popup-transparency'),
popupSlides = modTransp.querySelectorAll('.popup-transparency-slider__slide'),
popupRight = document.getElementById('transparency_right'),
popupLeft = document.getElementById('transparency_left'),
curr = modTransp.querySelector('.slider-counter-content__current'),
total = modTransp.querySelector('.slider-counter-content__total'),
close = modTransp.querySelectorAll('.close');

	let step = 0;
	curr.textContent = step + 1;

if (window.screen.width < 1094){
transpSlaider.style.display = 'flex';
transpSlaider.style.flexWrap = 'nowrap';
transpSlaider.style.overflow = 'hidden';
arrLeft.style.display = 'none';
	transpItems.forEach((item, i) =>{
		item.style.display = 'none';
		if (i === 0){
			item.style.display = 'flex';
		} 
	});
}

const moveRight = (arrL, arrR, item, current) =>{
	console.log(step);
	arrL.style.display = 'flex';
		item[step].style.display = 'none';
		step++;
		item[step].style.display = 'flex';
		if(current){
			current.textContent = step + 1;
		}
		if (step === item.length - 1) {
			arrR.style.display = 'none';
		}
}

const moveLeft = (arrL, arrR, item, current) =>{

	arrR.style.display = 'flex';
		item[step].style.display = 'none';
		step--;
		item[step].style.display = 'flex';
		if(current){
			current.textContent = step + 1;
		}
		if (step === 0) {
			arrL.style.display = 'none';
		}
}

arrRight.addEventListener('click', () =>{
	moveRight(arrLeft, arrRight, transpItems)
});

arrLeft.addEventListener('click', () =>{
	moveLeft(arrLeft, arrRight, transpItems);
});

transpSlaider.addEventListener('click', event => {
	let target = event.target;
	target = target.closest('.transparency-item');
	
	transpItems.forEach(item =>{
		if (item === target){
		modTransp.style.visibility = 'initial';
		popupLeft.style.display = 'none';
		total.textContent = popupSlides.length;
		return step = 0;
		}
	});
});

popupRight.addEventListener('click', () =>{
	moveRight(popupLeft, popupRight, popupSlides, curr);
});

popupLeft.addEventListener('click', () =>{
	moveLeft(popupLeft, popupRight, popupSlides, curr);
});

modTransp.addEventListener('click', event =>{
	let target = event.target;
	close.forEach(item =>{
		if(item === target){
			modTransp.removeAttribute('style');
		}
	})
});


};




export default documents;