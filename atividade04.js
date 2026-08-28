const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const tipAmountEl = document.getElementById('tip-amount');
const totalPerPersonEl = document.getElementById('total-per-person');

let currentTipPercent = 10;
//
function calculate(){
    const billValue =parseFloat(billInput.value) || 0;
    const peopleCount = parseInt(peopleInput.value) || 1;
    //
    const validPeople = peopleCount < 1 ? 1 : peopleCount;
    //
    const totalTip = billValue * (currentTipPercent/100);
    const totalBill= billValue + totalTip;
    const perPerson = totalBill/validPeople;
    //
    tipAmountEl.innerText = totalTip.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    totalPerPersonEl.innerText= perPerson.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
}
//
tipButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        //
        tipButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        //
        currentTipPercent = parseFloat(button.dataset.tip);
        calculate();
    });
});
//
billInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate);