const tabs = () =>{
    const shameList = document.getElementById('scheme-list'),
 btnItems = shameList.querySelectorAll('.scheme-nav__item'),
 shameSlaiderWrap = document.querySelector('.scheme-slider-wrap'),
 shameSlaideImg = shameSlaiderWrap.querySelectorAll('.scheme-slider__slide'),
 shameSlaideTxt = shameSlaiderWrap.querySelectorAll('.scheme-description-block');

 shameList.addEventListener('click', event => {
 	let target = event.target;

 	btnItems.forEach((item, i) =>{
 		item.classList.remove('active');
 		if(item === target){
 			item.classList.add('active');
 			for(let v = 0; v < i; v++){
 				shameSlaideImg[v].style.display = 'none';
 			}
 			for (let unv = i; unv < shameSlaideImg.length; unv++){
 				shameSlaideImg[unv].style.display = 'flex';
 			}
 			shameSlaideTxt.forEach((item, k) =>{
 				item.classList.remove('visible-content-block');
 				if (k === i){
 					item.classList.add('visible-content-block');
 				}
 			});
 		}
 	});
 });
};

export default tabs;