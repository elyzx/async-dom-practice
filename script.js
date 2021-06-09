let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let timeDOM = document.querySelector('#timer')

// STEP 3: Create an object from the timer class

let timer = new Timer()

function updateTime(){
    timeDOM.innerText = timer.time
}


startBtn.addEventListener('click', () => {
    // Call the timer start method
    timer.start(updateTime)
})


stopBtn.addEventListener('click', () => {
    // Call the timer stop method
    timer.stop()
})