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
    // document.querySelector('.aim-data').reset();
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
    chooseAction ();
    createAimCard();
    document.querySelector('.aim-data').reset();
})

/*
Функция создания карточки цели
 */

function createAimCard () {
    const form = document.querySelector('.aim-data');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('aim-card');

    let card = document.querySelector('.aim-card');
    cardDiv.innerHTML = card.innerHTML;

    let removeButton = cardDiv.querySelector('.remove');
    removeButton.addEventListener('click', () => {
        cardDiv.remove();
    });



    form.parentNode.insertBefore(cardDiv, form.nextSibling);
}

/*
Поиск объекта для вычислений и заполнения полей карточки цели
 */

function objectSearch () {
    let a = aimMass.length - 1;
    return a;
}


/*
Вычисление количества месяцев, необходимых для накопления нужной суммы
 */

function getMonthsAmount () {

    let result = 0;
    let startSum = +aimMass[0]['start-sum'];
    let finalSum = +aimMass[0]['final-sum'];
    let rate = +aimMass[0].rate;
    let monthPay = +aimMass[0]['monthly-payment'];

    while (startSum < finalSum) {
        startSum = startSum + (startSum * (rate / 12 / 100)) + monthPay;
        result += 1;
    }
    console.log(result);
}

/*
Вычисление ежемесячного платежа
 */

function getMonthPayment() {
    let result = 0;
    let startSum = +aimMass[0]['start-sum'];
    let finalSum = +aimMass[0]['final-sum'];
    let rate = +aimMass[0].rate;
    let time = +aimMass[0].time;

    result = (finalSum - (startSum + (startSum * (rate / 12 / 100)) * time)) / time;

    console.log(result);
}



/*
Функция выбора вычисления
 */

function chooseAction () {
    if (aimMass[0].radio === 'on') {
        console.log(aimMass[0].radio === 'on');
        getMonthPayment();
    } else if (aimMass[0]['radio-m'] === 'on') {
        console.log(aimMass[0]['radio-m'] === 'on');
        getMonthsAmount();
    }
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
