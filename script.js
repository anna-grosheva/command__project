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
})

/*
Функция создания каррточки цели
 */

function createAimCard () {
    const form = document.querySelector('.aim-data');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('aim-card');

    const firstInner = document.createElement('div');
    const headH3 = document.createElement('h3');
    headH3.classList.add('aim-card__heading');
    headH3.innerText = 'Название цели';
    const mainContent = document.createElement('p');
    mainContent.classList.add('aim-card__text');
    firstInner.append(headH3);
    firstInner.append(mainContent);

    const secondInner = document.createElement('div');
    secondInner.classList.add('aim-card__buttons');

    form.parentNode.insertBefore(cardDiv, form.nextSibling);







    // const testButton = document.createElement('button');
    // testButton.innerText = 'TEST';
    // form.parentNode.insertBefore(testButton, form.nextSibling);
}

createAimCard();


// кнопка Добавить
let form = document.querySelector('form');
let card = document.querySelector('.aim-card');
let createButton = document.querySelector('.create');

form.style.display = 'none';
card.style.display = 'none';

createButton.addEventListener('click', () => {
    form.style.display = 'block';
})

