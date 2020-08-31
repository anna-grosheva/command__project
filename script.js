'use strict';

let form = document.querySelector('form');
let card = document.querySelector('.aim-card');
let divAllCards = document.querySelector('.all-cards');
let createButton = document.querySelector('.create');
let aimDataButton = document.querySelector('.aim-data__button');

let inputAim = form.querySelector('.aim');
let inputFinalSum = form.querySelector('.final-sum');
let inputStartSum = form.querySelector('.start-sum');
let inputRate = form.querySelector('.rate');
let inputTime = form.querySelector('.time');

let objIndex = 0;
let objUpdateButton = document.querySelector('.aim-data__update-button');


/*
Функция создания объекта цели из полей формы
 */

let aimMass = [];

function createAimUnit() {
    const formData = new FormData(event.target);
    let obj = {};
    let aim = formData.get('aim');
    let finalSum = formData.get('final-sum');
    let startSum = formData.get('start-sum');
    let rate = formData.get('rate');
    let radioM = formData.get('radio');
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
    return aimMass;
}

/*
Обработчик на отправку данных
 */

document.querySelector('.aim-data').addEventListener('submit', (event) => {
    event.preventDefault();
    createAimUnit();
    createAimCard ();
    render();
    document.querySelector('.aim-data').reset();
    minimizeForm();
})

/*
Функция создания карточки цели
 */

function render() {
    divAllCards.innerHTML = '';

    for (let i = 0; i < aimMass.length; i ++) {

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('aim-card');
        cardDiv.innerHTML = card.innerHTML;
        cardDiv.querySelector('h3').innerText = aimMass[i].aim;

        getMonthPayment(i);

        cardDiv.querySelector('p').innerHTML = '<p>' + `Стоимость: ${aimMass[i]['final-sum']} RUB` + '</p>' + '<p>' + `Будет достигнута: ${aimMass[i].time} месяцев` + '</p>' + '<p class="white-bold">' + `Ежемесячный платеж: ${aimMass[i]['monthly-payment']} RUB` + '</p>' + '<p class="cursive">' + `При условии стартовой суммы в ${aimMass[i]['start-sum']} RUB и ставке вашего вклада ${aimMass[i].rate}%.` + '</p>';

        divAllCards.append(cardDiv);

        let removeButton = cardDiv.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            objDelete(cardDiv);
            render();
            // console.log(aimMass);
        });

        let editButton = cardDiv.querySelector('.edit');
        editButton.addEventListener('click', () => {
            cardDiv.classList.add('selected');
            form.style.display = 'flex';
            hideSubmitBtn();
            showUpdateBtn();
            editCardData();
        });

        objUpdateButton.addEventListener('click', (event) => {
            objUpdate(objIndex);
            form.style.display = 'none';
            event.target.style.display = 'none';
            document.querySelector('.aim-data__button').style.display = 'block';
            render();
        });
    }
}

/*
Функция заполнения формы при редактировании
*/

function editCardData() {
    let cardDivs = document.querySelectorAll('.aim-card');
    cardDivs.forEach((cardDiv, index) => {
        if (cardDiv.classList.contains('selected')) {
            objIndex = index;
            // console.log(aimMass[index]);
            inputAim.value = aimMass[index].aim;
            inputFinalSum.value = aimMass[index]['final-sum'];
            inputStartSum.value = aimMass[index]['start-sum'];
            inputRate.value = aimMass[index].rate;
            inputTime.value = aimMass[index].time;
        }
    });
}

function objUpdate (objIndex) {
    let activeObject = aimMass[objIndex];
    activeObject.aim = inputAim.value;
    activeObject['final-sum'] = inputFinalSum.value;
    activeObject['start-sum'] = inputStartSum.value;
    activeObject.rate = inputRate.value;
    activeObject.time = inputTime.value;
    // console.log(activeObject);
}

function objDelete (cardDiv) {
    cardDiv.classList.add('for-delete');
    let cardDivs = document.querySelectorAll('.aim-card');
    cardDivs.forEach((cardDiv, index) => {
        if (cardDiv.classList.contains('for-delete')) {
            objIndex = index;
            aimMass.splice(objIndex, 1);
            console.log(aimMass);
            cardDiv.remove();
        };
    });
}

/*
Вычисление ежемесячного платежа
 */

function getMonthPayment(index) {
    let startSum = +aimMass[index]['start-sum'];
    let finalSum = +aimMass[index]['final-sum'];
    let rate = +aimMass[index].rate;
    let time = +aimMass[index].time;

    aimMass[index]['monthly-payment'] = ((finalSum - (startSum + (startSum * (rate / 12 / 100)) * time)) / time).toFixed(2);
    // console.log(aimMass[index]['monthly-payment']);
}

// кнопка Добавить

function createAim () {
    form.style.display = 'flex';
}

createButton.addEventListener('click', () => {
    createAim();
    document.querySelector('.aim-data').reset();

})

// let aimDataMonths = document.querySelector('.aim-data__months');
// let aimDataPayment = document.querySelector('.aim-data__payment');


//скрытие кнопок

function minimizeForm () {
    form.style.display = 'none';
}

card.style.display ='none';

function createAimCard () {
    card.style.display = 'flex';
}

function hideSubmitBtn () {
    aimDataButton.style.display = 'none';
}

function showUpdateBtn () {
    objUpdateButton.style.display = 'block';
}