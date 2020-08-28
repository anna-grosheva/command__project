




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
