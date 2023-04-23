export default class Ship {
    constructor (shipLength) {
        this.shipLength = shipLength
        this.hits = 0
    }

    getShipLength() {
        return this.shipLength
    }

    hit() {
        this.hits++
    }

    isSunk() {
        if (this.hits < this.shipLength) {
            return false
        }
        return true
    }
}