import Ship from "./Ship"
// const BOARD_SIZE = 8
const gameboard = (() => {
   
    let playerBoard = []
    let aiBoard = []
    aiBoard = initialArray(aiBoard)
    playerBoard = initialArray(playerBoard)
    
    function setAiShips(fleet) {
        for (let i = 0; i < fleet.length; i++) {
            for (let j = 0; j < fleet[i].shipNumber; j++) {
                let ship = generateShip(fleet[i].shipLength)
                console.log(`Ship${j} is generated with length:${fleet[i].shipLength}`)
                while (isMapsIntersect(ship.getShipArea(), aiBoard)) {
                    ship = generateShip(fleet[i].shipLength)
                    console.log(`Ship${j} REgenerated with length:${fleet[i].shipLength}`)
                }
                markShipOnMap(ship.getShipMap(), aiBoard)
                // console.log(ship.getShipMap())
            }
        }
    }

    function setPlayerShips(fleet) {
        for (let i = 0; i < fleet.length; i++) {
            for (let j = 0; j < fleet[i].shipNumber; j++) {
                let ship = generateShip(fleet[i].shipLength)
                console.log(`Ship${j} is generated with length:${fleet[i].shipLength}`)
                while (isMapsIntersect(ship.getShipArea(), playerBoard)) {
                    ship = generateShip(fleet[i].shipLength)
                    console.log(`Ship${j} REgenerated with length:${fleet[i].shipLength}`)
                }
                markShipOnMap(ship.getShipMap(), playerBoard)
                // console.log(ship.getShipMap())
            }
        }
    }

    function getAiBoard() {
        return aiBoard
    }

    function getPlayerBoard() {
        return playerBoard
    }

    function markShipOnMap(shipMap, boardMap) {
        for (let i = 0; i < boardMap.length; i++) {
            for (let j = 0; j < boardMap[i].length; j++) {
                if(shipMap[i][j] === true) {
                    boardMap[i][j] = shipMap[i][j]
                }
            }
        }
    }

    function isMapsIntersect(shipMap, boardMap) {
        for (let i = 0; i < boardMap.length; i++) {
            for (let j = 0; j < boardMap[i].length; j++) {
                if(boardMap[i][j] === true && shipMap[i][j] === true) {
                    return true
                }
            }
        }
        return false
    }

    function generateShip(shipLength) {
        function generateHeadLocation() {
            return [Math.floor(Math.random() * 7), Math.floor(Math.random() * 7)]
        }
        function generateDirection() {
            const bool = Math.floor(Math.random() * 2)
            if (bool === 0) {
                return false
            }
            else {
                return true
            }
        }
        return new Ship(shipLength, generateHeadLocation(), generateDirection())
    }

    function initialArray(arr) {
        arr = new Array(8)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(8)
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j] = false
            }
        }
        return arr
    }


    return {isMapsIntersect, generateShip, setAiShips, getAiBoard, setPlayerShips, getPlayerBoard}
})()

export default gameboard

