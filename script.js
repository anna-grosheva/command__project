'use strict';



/*
Функция создания объекта цели из полей формы
 */

let aimMass = [];

function createAimUnit () {
    const formData = new FormData(event.target);
    let obj = {};
    let aim = formData.get('aim');
    let finalSum= formData.get('final-sum');
    let startSum = formData.get('start-sum');
    let rate = formData.get('rate');
    let radioM = formData.get('radio-m');
    let radio = formData.get('radio');
    let time = formData.get('time');
    let monthlyPayment = formData.get('monthly-payment');

    obj.aim = aim;
    obj['final-sum'] = finalSum;
    obj['start-sum'] = startSum;
    obj.rate = rate;
    obj['radio-m'] = radioM;
    obj.radio = radio;
    obj.time = time;
    obj['monthly-payment'] = monthlyPayment;

    aimMass.push(obj);
    document.querySelector('.aim-data').reset();
    console.log(aimMass);
    return aimMass;
}


/*
Функция прописывания результатов вычислений в карточку цели
 */

`Для цели`

/*
Обработчик на отправку данных
 */

document.querySelector('.aim-data').addEventListener('submit', (event) => {
    event.preventDefault();
    createAimUnit();
    createAimCard();
})

/*
Функция создания карточки цели
 */

function createAimCard () {
    const form = document.querySelector('.aim-data');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('aim-card');

    // let card = document.querySelector('.aim-card');
    // cardDiv.innerHTML = card.innerHTML;

    // let removeButton = cardDiv.querySelector('.remove');
    // removeButton.addEventListener('click', () => {
    //     cardDiv.remove();
    // });

    const firstInner = document.createElement('div');
    const headH3 = document.createElement('h3');
    headH3.classList.add('aim-card__heading');
    headH3.innerText = aimMass[objectSearch()].aim;
    const mainContent = document.createElement('p');
    mainContent.innerText = 'Текст';
    mainContent.classList.add('aim-card__text');
    firstInner.append(headH3);
    firstInner.append(mainContent);

    const secondInner = document.createElement('div');
    secondInner.classList.add('aim-card__buttons');
    const editButton = document.createElement('button');
    editButton.classList.add('aim-card__single-button');
    editButton.classList.add('edit');
    editButton.innerHTML = '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '                        <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>\n' +
        '                        <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>\n' +
        '                    </svg>';
    const removeButton = document.createElement('button');
    removeButton.classList.add('aim-card__single-button');
    removeButton.classList.add('remove');
    removeButton.innerHTML = '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n' +
        '                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>\n' +
        '                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>\n' +
        '                    </svg>';
    secondInner.append(editButton);
    secondInner.append(removeButton);

    cardDiv.append(firstInner);
    cardDiv.append(secondInner);

    form.parentNode.insertBefore(cardDiv, form.nextSibling);
}

/*
Поиск объекта для вычислений и заполнения полей карточки цели
 */

function objectSearch () {
    let a = aimMass.length - 1;
    return a;
}

function getFinalSum () {

}

function getTotalEarn () {
    // let deposite = depositAmount * ((1 + ((rate)/12/100))**period)
    //
    // 1000*((1+((4)/12/100))**2)  = итоговая сумма 1006.68

}




// кнопка Добавить
let form = document.querySelector('form');
let card = document.querySelector('.aim-card');
let createButton = document.querySelector('.create');

form.style.display = 'none';
card.style.display = 'none';

createButton.addEventListener('click', () => {
    form.style.display = 'block';
})

//Выбор radio и сохранить
 
let aimDataMonths = document.querySelector('.aim-data__months');
let aimDataPayment = document.querySelector('.aim-data__payment');
let radioTime = document.querySelector('#radio-time');
let radioMonthlyPayment = document.querySelector('#radio-monthly-payment');
let aimDataButton = document.querySelector('.aim-data__button');

radioTime.addEventListener('click', () => {
    aimDataMonths.style.display = 'flex';
    aimDataPayment.style.display = 'none';
    aimDataButton.style.display = 'block';
});
radioMonthlyPayment.addEventListener('click', () => {
    aimDataMonths.style.display = 'none';
    aimDataPayment.style.display = 'flex';
    aimDataButton.style.display = 'block';
});


