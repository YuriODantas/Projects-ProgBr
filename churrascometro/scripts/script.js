let inputAdults = document.querySelector('#number-of-adults');
let inputChildren = document.querySelector('#number-of-children');
let inputDuration = document.querySelector('#barbecue-duration');

let result = document.querySelector('.main-result');

function calcBarbecue() {
    let adults = inputAdults.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;

    let amountOfMeat = (meatPerPerson(duration) * adults + (meatPerPerson(duration) / 2 * children)) / 1000;
    let amountOfBeer = (beerPerPerson(duration) * adults) / 355;
    let amountOfDrink = (drinkPerPerson(duration) * adults + (drinkPerPerson(duration) / 2 * children)) / 2000;

    result.style.display = "flex";
    result.innerHTML = `<p class="text -first">Para o seu churrasco<br>você precisara de:</p>
    <p class="text">${amountOfMeat.toFixed(2).replace('.', ',')} kg de Carne</p>
    <p class="text">${Math.ceil(amountOfBeer)} Latas de Cerveja</p>
    <p class="text">${Math.round(amountOfDrink)} garrafas de 2l de bebida<br>(Água, refrigerante ou etc.)</p>`;
}

function meatPerPerson(duration) {
    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function beerPerPerson(duration) {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function drinkPerPerson(duration) {
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}