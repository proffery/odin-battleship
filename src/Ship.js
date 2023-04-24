export default class Ship {
    constructor (shipName, shipLength, shipHeadLocation, isVertical) {
        this.shipName = shipName
        this.shipLength = shipLength
        this.shipHeadLocation = shipHeadLocation
        this.isVertical = isVertical
        this.hits = 0
        this.shipMap = new Array(8)
        for(let i = 0; i < this.shipMap.length; i++) {
            this.shipMap[i] = new Array(8)
        }
        this.setShipMap(this.shipHeadLocation)
    }
    
    getShipName() {
        return this.shipName
    }
    
    setShipMap(shipHeadLocation) {
        for(let i = 0; i < this.shipMap.length; i++) {
            for(let j = 0; j < this.shipMap[i].length; j++) {
                this.shipMap[i][j] = false
            }
        }
        if(this.isVertical) {
            for(let i = 0; i < this.shipLength; i++) {
                this.shipMap[shipHeadLocation[1] + i][shipHeadLocation[0]] = true
            }
        }
        else {
            for(let i = 0; i < this.shipLength; i++) {
                this.shipMap[shipHeadLocation[1]][shipHeadLocation[0] + i] = true
            }
        }
    }

    getShipMap() {
        return this.shipMap
    }

    setIsVertical(boolean) {
        this.isVertical = boolean
        this.setShipMap(this.shipHeadLocation)
    }

    getIsVertical() {
        return this.isVertical
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