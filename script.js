'use strict';

let aimMass = [];

function tryF () {
    let obj = {};
    let aim = document.querySelector('.aim').value;
    let finalSum= document.querySelector('.final-sum').value;
    let startSum = document.querySelector('.start-sum').value;
    let rate = document.querySelector('.rate').value;

    obj.aim = aim;
    obj['final-sum'] = finalSum;
    obj['start-sum'] = startSum;
    obj.rate = rate;

    aimMass.push(obj);
    console.log(aimMass);
    return aimMass;
}

document.querySelector('.aim-data button').addEventListener('click', (event) => {
    event.preventDefault();
    tryF();
})

console.log(aimMass);









