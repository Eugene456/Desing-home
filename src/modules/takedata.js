const takeData = () =>{
    


fetch('./db.json')
.then((response)=>{
    if (response.status !== 200){
        throw new Error('status network not 200');
    }
    return response.json();
})

.then((response) =>{
    sortData(response);
});


const sortData =(data) =>{
const navCont  = document.querySelector('.nav-list-popup-repair');


data.forEach(item =>{
let btn = document.createElement('button');
    btn.classList.add('button_o');
    btn.classList.add('popup-repair-types-nav__item');
    btn.textContent = item.title;
    navCont.appendChild(btn);

});

    

const btnChapter = navCont.querySelectorAll('.popup-repair-types-nav__item'),
        title = document.querySelector('.popup-repair-types-content__head-title'),    
        tdContainer = document.querySelector('.popup-repair-types-content-table__list'),
        tBody = tdContainer.querySelector('tbody');

    const showContent = (num)=>{

        data[num].priceList.forEach( item =>{

            let tr = document.createElement('tr');
            tr.classList.add('mobile-row');
            tr.classList.add('showHide');

            let tdType = document.createElement('td');
            tdType.classList.add('repair-types-name');
            tdType.textContent = item.typeService;

            let tdUnit = document.createElement('td');
            tdUnit.classList.add('mobile-col-title');
            tdUnit.classList.add('tablet-hide');
            tdUnit.classList.add('desktop-hide');
            tdUnit.textContent = 'Ед.измерения';

            let tdTitlePrice = document.createElement('td');
            tdTitlePrice.classList.add('mobile-col-title');
            tdTitlePrice.classList.add('tablet-hide');
            tdTitlePrice.classList.add('desktop-hide');
            tdTitlePrice.textContent = 'Ед.измерения';

            let tdMeas = document.createElement('td');
            tdMeas.classList.add('repair-types-value');
            tdMeas.textContent = item.units;

            let tdPrice = document.createElement('td');
            tdPrice.classList.add('repair-types-value');
            tdPrice.textContent = item.cost;

            tr.appendChild(tdType);
            tr.appendChild(tdUnit);
            tr.appendChild(tdTitlePrice);
            tr.appendChild(tdMeas);
            tr.appendChild(tdPrice);
            tBody.appendChild(tr);

      });
    } 

    showContent(0);
    btnChapter[0].classList.add('active');

navCont.addEventListener('click', event =>{
    let target = event.target;
    
   tBody.textContent = '';
    
   
    btnChapter.forEach((item, i) =>{
        item.classList.remove('active');
        if(item === target){
            item.classList.add('active');
            title.textContent = data[i].title;
            showContent(i);
        }
    });
});


}
 


}

export default takeData;