//.
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
//.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) +97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
//.
const randomFunc = {
    lower: getRandomLower,
    upper : getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
//.
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );

    if (typesCount === 0) {
        return 'Selecione uma opção';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;

    if (!password || password === 'Selecione uma opção') {
        return;
    }

    navigator.clipboard.writeText(password);
    alert('Senha copiada para a área de transferência');
});