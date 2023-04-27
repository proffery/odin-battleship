export default class Ship {
    constructor (shipLength, shipHeadLocation, isVertical) {
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

    
    setShipMap(shipHeadLocation) {
        for(let i = 0; i < this.shipMap.length; i++) {
            for(let j = 0; j < this.shipMap[i].length; j++) {
                this.shipMap[i][j] = false
            }
        }
        
        if(this.isVertical) {
            for(let i = 0; i < this.shipLength; i++) {
                try {
                    this.shipMap[shipHeadLocation[1] + i][shipHeadLocation[0]] = true
                }
                catch {
                    this.shipMap[shipHeadLocation[1] - (this.shipLength - i)][shipHeadLocation[0]] = true
                }
            }
        }
        else {
            for(let i = 0; i < this.shipLength; i++) {
                if (this.shipMap[shipHeadLocation[1]][shipHeadLocation[0] + i] === undefined) {
                    this.shipMap[shipHeadLocation[1]][shipHeadLocation[0] - (this.shipLength - i)] = true
                }
                else {
                    this.shipMap[shipHeadLocation[1]][shipHeadLocation[0] + i] = true
                }
            }
        }
    }

    getShipMap() {
        return this.shipMap
    }

    getShipArea() {
        let shipArea = new Array(8)
        for(let i = 0; i < shipArea.length; i++) {
            shipArea[i] = new Array(8)
        }

        for (let i = 0; i < this.shipMap.length; i++) {
            for (let j = 0; j < this.shipMap[i].length; j++) {
                shipArea[i][j] = this.shipMap[i][j]
            }
        }

        for (let i = 0; i < shipArea.length; i++) {
            for (let j = 0; j < shipArea[i].length; j++) {
                if (j > 0 && j < shipArea.length) {
                    if (shipArea[i][j] === true) {
                        shipArea[i][j - 1] = true
                    }
                }

                if (j == 0 && shipArea[i][j] === true) {
                    shipArea[i][j + 1] = true
                }
                
                if (j == shipArea.length && shipArea[i][j] === true) {
                    shipArea[i][j - 1] = true
                }

                if (i > 0 && i < shipArea.length) {
                    if (shipArea[i][j] === true) {
                        shipArea[i - 1][j] = true
                    }
                }

                if (i == 0 && shipArea[i][j] === true) {
                    shipArea[i + 1][j] = true
                }

                if (i == shipArea.length && shipArea[i][j] === true) {
                    shipArea[i - 1][j] = true
                }
            }
        }
     
        return shipArea
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