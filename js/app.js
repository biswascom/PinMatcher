
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayPinInput = document.getElementById('display-pin');
    displayPinInput.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumbersInput = document.getElementById('typed-numbers');
    const typeNumberPreviousValue = typeNumbersInput.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumbersInput.value = '';
        }
        else if (number === '<') {
            const digits = typeNumberPreviousValue.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumbersInput.value = remainingDigits;
        };
    }
    else {
        const newTypedNumber = typeNumberPreviousValue + number;
        typeNumbersInput.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typedNumber === displayPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    };
});