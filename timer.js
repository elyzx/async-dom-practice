// add properties and methods for your timer here
class Timer {
    constructor () {
        this.time = 0;
        this.intervalID = 0;
    }
    // STEP1: Create a start method to start the timer
    start (callback) {
        this.intervalID = setInterval(() => {
            this.time += 1
            callback()
        }, 1000)
    }
    // STEP2: Create a stop method to stop the timer
    stop () {
        clearInterval(this.intervalID)
    }

}