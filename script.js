const timerDisplay = document.getElementById('timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
let minutes = '00'
let seconds = '00'
let count = '00'

start.addEventListener('click', function() {
    timer = true;
    stopWatch();
})

stop.addEventListener('click', function() {
    timer = false;
})

reset.addEventListener('click', function() {
    timer = false
    minutes = '00'
    seconds = '00'
    count ='00'
    timerDisplay.innerHTML = `${minutes} : ${seconds} : ${count}`
})

function stopWatch() {
    if(timer) {
        count++;

        if (count == 100) {
            seconds++
            count = 00;
        }

        if (seconds == 60) {
            minutes++
            seconds = 00;
        }
        setTimeout(stopWatch, 1)
        timerDisplay.innerHTML = `${minutes} : ${seconds} : ${count}`
    }
}