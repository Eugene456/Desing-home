const accordion = () =>{
    const container = document.querySelector('.accordion'),
	headers = container.querySelectorAll('h2'),
	messages = container.querySelectorAll('.msg');

	let interval;
	let count = 100;

	

	container.addEventListener('click', event =>{
		let target = event.target;
		
		headers.forEach((item, i) =>{
			
			if(item === target){
				messages.forEach((msg, k) => {
					msg.style.maxHeight = '0';
					msg.style.opacity = 0;
					msg.style.transform = 'translate(0, 50%)';
					if (k === i){
						msg.style.maxHeight = '100%';
						msg.style.opacity = 1;
						msg.style.transform = 'translate(0)';
					}
				});
			}
		});
    });
};
    export default accordion;