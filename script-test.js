




document.querySelector('.aim-data').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    let aim = formData.get('aim');
    let finalSum= formData.get('final-sum');
    let startSum = formData.get('start-sum');
    let rate = formData.get('rate');
    let radioM = formData.get('radio-m');
    let radioT = formData.get('radio-t');
    let time = formData.get('time');
    let monthlyPayment = formData.get('monthly-payment');
    let result = 0;
    let monthsAmount = 0;
    let monthPayment = 0;

    function chooseAction () {
         if (radioTime.value === 'on') {
            getMonthsAmount();
        }
    }

    chooseAction();

    /*
Вычисление ежемесячного платежа
 */

    function getMonthPayment() {
        let fSum = +finalSum;
        let sSum = +startSum;
        let lRate = +rate;
        let lTime = +time;

        monthPayment = 0;
        monthPayment = (fSum - (sSum + (sSum * (lRate / 12 / 100)) * lTime)) / lTime;
        console.log(monthPayment);
    }

    /*
Вычисление количества месяцев, необходимых для накопления нужной суммы
 */

    function getMonthsAmount () {
        let fSum = +finalSum;
        let sSum = +startSum;
        let lRate = +rate;
        let monthPay = +monthlyPayment;
        monthsAmount = 0;

        while (sSum < fSum) {
            sSum = sSum + (sSum * (lRate / 12 / 100)) + monthPay;
            monthsAmount += 1;
        }
        console.log(monthsAmount);
    }




    document.querySelector('.aim-data').reset();

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('aim-card');

    form.style.display = 'none';

    cardDiv.innerHTML = card.innerHTML;
    cardDiv.querySelector('h3').innerText = aim;
    cardDiv.querySelector('p').innerText = `Ваша цель стоимостью ${finalSum} будет достигнута через ${time} месяцев при условии стартовой суммы в ${startSum} RUB и ставки по вкладу ${rate}%.`;


    let editButton = cardDiv.querySelector('.edit');
    editButton.addEventListener('click', () => {
        cardDiv.classList.add('selected');
        let updateButton = form.querySelector('.aim-data__update-button');
        form.style.display = 'block';
        aimDataButton.style.display = 'none';
        updateButton.style.display = 'block';
        

        let inputAim = form.querySelector('.aim');
        let inputFinalSum = form.querySelector('.final-sum');
        let inputStartSum = form.querySelector('.start-sum');
        let inputRate = form.querySelector('.rate');
        let inputTime = form.querySelector('.time');
        inputAim.value = aim;
        inputFinalSum.value = finalSum;
        inputStartSum.value = startSum;
        inputRate.value = rate;
        inputTime.value = time;
        

        let inputs = document.querySelectorAll('input');
        inputs.forEach((inputItem) => {
            inputItem.addEventListener('keyup', () => {
            
                let cardSelected = document.querySelector('.selected');
                cardSelected.querySelector('h3').innerText = inputAim.value;
                cardSelected.querySelector('p').innerText = `Ваша цель стоимостью ${inputFinalSum.value} будет достигнута через ${inputTime.value} месяцев при условии стартовой суммы в ${inputStartSum.value} RUB и ставки по вкладу ${inputRate.value}%.`;
            });
        });

        updateButton.addEventListener('click', () => {
            form.style.display = 'none';
            form.reset();
            cardDiv.classList.remove('selected');
        });
    
    });

    let removeButton = cardDiv.querySelector('.remove');
    removeButton.addEventListener('click', () => {
        cardDiv.remove();
    });

    form.parentNode.insertBefore(cardDiv, form.nextSibling);

})




// кнопка Добавить

let form = document.querySelector('form');
let card = document.querySelector('.aim-card');
let createButton = document.querySelector('.create');

form.style.display = 'none';
card.style.display = 'none';

createButton.addEventListener('click', () => {
    form.style.display = 'block';
});


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

//************************************************
'use strict';

let form = document.querySelector('form');
let card = document.querySelector('.aim-card');
let divAllCards = document.querySelector('.all-cards');

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
    // chooseAction();
    // createAimCard();
    render();
    document.querySelector('.aim-data').reset();
})

/*
Функция создания карточки цели
 */

function render () {
    divAllCards.innerHTML = '';
    for (let i = 0; i < aimMass.length; i ++) {
        let index = i;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('aim-card');
        cardDiv.innerHTML = card.innerHTML;
        cardDiv.querySelector('h3').innerText = aimMass[i].aim;

        getMonthPayment(index);

        let removeButton = cardDiv.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            cardDiv.remove();
        });

        let editButton = cardDiv.querySelector('.edit');
        editButton.addEventListener('click', () => {
            cardDiv.classList.add('selected');
        });

        divAllCards.prepend(cardDiv);

        console.log(divAllCards);
    }
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

// function getMonthsAmount () {
//
//     let result = 0;
//     let startSum = +aimMass[0]['start-sum'];
//     let finalSum = +aimMass[0]['final-sum'];
//     let rate = +aimMass[0].rate;
//     let monthPay = +aimMass[0]['monthly-payment'];
//
//     while (startSum < finalSum) {
//         startSum = startSum + (startSum * (rate / 12 / 100)) + monthPay;
//         result += 1;
//     }
//     console.log(result);
// }

/*
Вычисление ежемесячного платежа
 */

function getMonthPayment(index) {
    let result = 0;
    let startSum = +aimMass[index]['start-sum'];
    let finalSum = +aimMass[index]['final-sum'];
    let rate = +aimMass[index].rate;
    let time = +aimMass[index].time;

    aimMass[index]['monthly-payment'] = (finalSum - (startSum + (startSum * (rate / 12 / 100)) * time)) / time;

    console.log(aimMass[index]['monthly-payment']);
    console.log(aimMass);
}



/*
Функция выбора вычисления
 */

function chooseAction (index) {
    if (aimMass[index].radio === 'on') {
        console.log(aimMass[index].radio === 'on');
        getMonthPayment();
    } else if (aimMass[index]['radio-m'] === 'on') {
        console.log(aimMass[index]['radio-m'] === 'on');
        getMonthsAmount();
    }
}



// кнопка Добавить

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

aimDataButton.addEventListener('click', () => {
    form.style.display = 'none';
})

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


function radiocheck1() {
    if ( this.value === 'radio-t'){
        console.log('time');
        getMonthsAmount();
    } else if (this.value === 'radio-m') {
        getMonthPayment();
        console.log('month');
    }
}

/*
Поиск объекта для вычислений и заполнения полей карточки цели
 */

// function objectSearch () {
//     let a = aimMass.length - 1;
//     return a;
// }


/*
Вычисление количества месяцев, необходимых для накопления нужной суммы
 */

// function getMonthsAmount () {
//
//     let result = 0;
//     let startSum = +aimMass[0]['start-sum'];
//     let finalSum = +aimMass[0]['final-sum'];
//     let rate = +aimMass[0].rate;
//     let monthPay = +aimMass[0]['monthly-payment'];
//
//     while (startSum < finalSum) {
//         startSum = startSum + (startSum * (rate / 12 / 100)) + monthPay;
//         result += 1;
//     }
//     console.log(result);
// }

/*
Функция выбора вычисления
 */

// function chooseAction (index) {
//     if (aimMass[index].radio === 'on') {
//         console.log(aimMass[index].radio === 'on');
//         getMonthPayment();
//     } else if (aimMass[index]['radio-m'] === 'on') {
//         console.log(aimMass[index]['radio-m'] === 'on');
//         getMonthsAmount();
//     }
// }

// radioTime.addEventListener('click', () => {
//     aimDataMonths.style.display = 'flex';
//     aimDataPayment.style.display = 'none';
//     aimDataButton.style.display = 'block';
// });
// radioMonthlyPayment.addEventListener('click', () => {
//     aimDataMonths.style.display = 'none';
//     aimDataPayment.style.display = 'flex';
//     aimDataButton.style.display = 'block';
// });