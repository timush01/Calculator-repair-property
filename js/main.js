const numberInput = document.querySelector('#square-input');
const numberRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const totalPriceElement = document.querySelector('#total-price');
const radioTypes = document.querySelectorAll("input[name='type']");
const building = document.querySelectorAll('input[name="building"]');
const rooms = document.querySelectorAll('input[name="rooms"]');
const ceilings = document.querySelectorAll('input[name="ceiling"]');
const walls = document.querySelectorAll('input[name="walls"]');
const floors = document.querySelectorAll('input[name="floor"]');

const defaultPrice = 10000;


numberRange.addEventListener('input', function () {
    numberInput.value = numberRange.value;
});

numberInput.addEventListener('input', function () {
    numberRange.value = numberInput.value;
});

let totalPrice = defaultPrice * parseInt(numberInput.value);

function calculate() {
    let totalPrice = defaultPrice * parseInt(numberInput.value);

    for (const radio of radioTypes) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        } 
    }

    for (const build of building) {
        if (build.checked) {
            totalPrice *= parseFloat(build.value);
        } 
    }

    for (const room of rooms) {
        if (room.checked) {
            totalPrice *= parseFloat(room.value);
        } 
    }

    for (const ceiling of ceilings) {
        if (ceiling.checked) {
            totalPrice += parseFloat(ceiling.value) * numberInput.value;
        } 
    }

    for (const wall of walls) {
        if (wall.checked) {
            totalPrice *= parseFloat(wall.value);
        } 
    }

    for (const floor of floors) {
        if (floor.checked) {
            totalPrice *= parseFloat(floor.value);
        } 
    }

    const formatter = new Intl.NumberFormat('ua');
    totalPriceElement.innerText = formatter.format(totalPrice);

};

calculate();

for (const input of inputs) {
    input.addEventListener('input', function() {
        calculate();
    })
};