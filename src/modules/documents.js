const documents = () => {
    const transpSlaider = document.querySelector('.transparency-slider'),
transpItems = transpSlaider.querySelectorAll('.transparency-item'),
arrRight = document.getElementById('transparency-arrow_right'),
arrLeft = document.getElementById('transparency-arrow_left'),

//модальное окно
modTransp = document.querySelector('.popup-transparency');

	let step = 0;

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

arrRight.addEventListener('click', () =>{
	arrLeft.style.display = 'flex';
		transpItems[step].style.display = 'none';
		step++;
		transpItems[step].style.display = 'flex';
		
		if (step === transpItems.length - 1) {
			arrRight.style.display = 'none';
		}
	
});

arrLeft.addEventListener('click', () =>{
	arrRight.style.display = 'flex';
		transpItems[step].style.display = 'none';
		step--;
		transpItems[step].style.display = 'flex';
		
		if (step === 0) {
			arrLeft.style.display = 'none';
		}
	
});

transpSlaider.addEventListener('click', event => {
	let target = event.target;
	target = target.closest('.transparency-item');
	console.log(target);
	transpItems.forEach(item =>{
		if (item === target){
		modTransp.style.visibility = 'initial';
		}
	});
});
};

export default documents;