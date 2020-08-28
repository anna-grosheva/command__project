

// function createAimUnit () {
//     const formData = new FormData(event.target);
    
//     let aim = formData.get('aim');
//     let finalSum= formData.get('final-sum');
//     let startSum = formData.get('start-sum');
//     let rate = formData.get('rate');
//     let radioM = formData.get('radio-m');
//     let radio = formData.get('radio');
//     let time = formData.get('time');
//     let monthlyPayment = formData.get('monthly-payment');

    
    
    
// }



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

    document.querySelector('.aim-data').reset();

    const form = document.querySelector('.aim-data');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('aim-card');

    let card = document.querySelector('.aim-card');
    cardDiv.innerHTML = card.innerHTML;
    cardDiv.querySelector('h3').innerText = aim;
    cardDiv.querySelector('p').innerText = `Ваша цель стоимостью ${finalSum}`;

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
