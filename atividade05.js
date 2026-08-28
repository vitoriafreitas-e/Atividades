const displayEl = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const lapBtn = document.getElementById('lap-btn');
const resetBtn = document.getElementById('reset-btn');
const lapsListEl = document.getElementById('laps-list');
//
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let lapCounter = 1;
//
function formatTime(ms){
    const hours = Math.floor(ms/3600000);
    const minutes = Math.floor((ms % 3600000)/ 60000);
    const seconds = Math.floor((ms % 60000)/ 1000);
    const miliseconds = Math.floor((ms % 1000)/10);
    let
    const pad = (num) => String (num).padStart(2,'0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(miliseconds)}`;
}
//