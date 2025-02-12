// Exercise 7 part 1-2
Class Logger {
    constructor(Referrer, id) {
        this.referrer = referre
        this.id = id
    }

    log = (value) => {
        console.log(`[${this.referrer}:${this.id}] : ${value}`)
    }
}

module.exports = Logger