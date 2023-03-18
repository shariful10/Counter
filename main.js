//---- Get Number For Counter By Id ----
const number = document.getElementById("number");

let startCount = 0;
let interval;

//---- Start Button --------------------
const btnStart = () => {
    interval = setInterval(() => {
        const numCount = ++startCount;
        number.innerText = numCount;
    }, 200);
}

//---- Stop Button ---------------------
const btnStop = () => {
    clearInterval(interval);
}

//---- Reset Button --------------------
const btnReset = () => {
    clearInterval(interval);
    startCount = 0;
    number.innerText = 0;
}