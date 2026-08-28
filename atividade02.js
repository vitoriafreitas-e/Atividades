const clockEl = document.getElementById('clock');
const dateEl = document.getElementById('date');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.icon');
//
function updateClock(){
    const now = new Date();

//
const hours = String(now.getHours()).padStart(2,'0');
const minutes = String(now.getMinutes()).padStart(2,'0');
const seconds = String(now.getSeconds()).padStart(2,'0');

clockEl.innerText = `${hours}:${minutes}:${seconds}`;
//
const options ={weekday: 'short', day: '2-digit', month: 'short'};
dateEl.innerText = now.toLocaleDateString('pt-BR', options);
}
//
setInterval(updateClock, 1000);
//
updateClock();
//
themeToggleBtn.addEventListener('click', ()=>{

    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode')
    themeIcon.innerText = isDarkMode ?  '🌙' : '☀️';

})