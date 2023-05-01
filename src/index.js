import './styles/style.css'
import Ship from './Ship'
import gameboard from './Gameboard'
import render from './render'
const aiBoard = document.querySelector('.ai-ships')
const playerBoard = document.querySelector('.player-ships')
const aiInfo = document.querySelector('.ai-info')
const playerInfo = document.querySelector('.player-info')
const fleet = [
    {
        shipLength: 4,
        shipNumber: 1
    },
    {
        shipLength: 3,
        shipNumber: 2
    },
    {   
        shipLength: 2,
        shipNumber: 3
    },
    {   
        shipLength: 1,
        shipNumber: 4
    }
]

startGame()

function startGame() {
    render.startGameWindow()
    const startButton = document.querySelector('.start-button')
    gameboard.generateAiShips(fleet)
    gameboard.generatePlayerShips(fleet)
    render.setShipsOnBoard(gameboard.getPlayerBoard(), playerBoard)
    render.setShipsOnBoard(gameboard.getAiBoard(), aiBoard)
    render.info(gameboard.getAiFleet(), aiInfo)
    render.info(gameboard.getPlayerFleet(), playerInfo)
    startButton.addEventListener('click', () => {
        gameboard.cleanAiBoard()
        gameboard.cleanPlayerBoard()
        render.cleanContainer(aiBoard)
        render.cleanContainer(playerBoard)
        render.cleanContainer(aiInfo)
        // render.cleanContainer(playerInfo)
        gameboard.generateAiShips(fleet)
        render.setShipsOnBoard(gameboard.getAiBoard(), aiBoard)
        render.info(gameboard.getAiFleet(), aiInfo)
        render.info(gameboard.getPlayerFleet(), playerInfo)
        setPlayerShips(gameboard.getPlayerBoard())
        
    })
}

function setPlayerShips(board) {
    render.setPlayerShipsWindow(board, fleet)
    render.setShipsOnBoard(board, playerBoard)
    const allShips = document.querySelectorAll('.ship-for-set')
    allShips.forEach(ship => ship.addEventListener('mousedown', () => {
        const createShip = new Ship(ship.getAttribute('value'), [0, 0], false)
        gameboard.addPlayerShipToFleet(createShip)
        console.log(gameboard.getPlayerFleet())
        const playerShipsBoard = document.querySelector('.set-player-board')
        const allCells = document.querySelectorAll('.set-player-board .row .cell')
        const lastShip = gameboard.getPlayerShipFromFleet(gameboard.getPlayerFleet().length - 1)
        
        allCells.forEach(cell => cell.addEventListener('mouseup', () => {
            if(!gameboard.isMapsIntersect(lastShip.getShipArea(), board)) {
                lastShip.setShipMap([cell.getAttribute('col'), cell.getAttribute('row')])
                console.log([cell.getAttribute('col'), cell.getAttribute('row')])
                gameboard.markShipOnMap(lastShip.getShipMap(), board)
                render.cleanContainer(playerBoard)
                render.cleanContainer(playerShipsBoard)
                render.setShipsOnBoard(board, playerBoard)
                render.setShipsOnBoard(board, playerShipsBoard)
            }
        }))
        // allCells.forEach(cell => cell.addEventListener('mouseleave', () => {
        //     gameboard.removeShipFromMap(lastShip.getShipMap(), board)
        //     render.cleanContainer(playerShipsBoard)
        //     render.setShipsOnBoard(board, playerShipsBoard)
        // }))
    }))

}



// console.log(gameboard.getAiBoard())
// gameboard.setPlayerShips(fleet)
// console.log(gameboard.getPlayerBoard())
// const ship = new Ship(4, [0, 0], true)
// console.log(ship.getShipMap())
// console.log(ship.getShipArea())
// const ship1 = gameboard.generateShip(4)
// const ship2 = gameboard.generateShip(3)
// console.log(gameboard.isMapsIntersect(ship1.getShipMap(), ship2.getShipMap()))
// console.log(ship1.getShipMap())
// console.log(ship2.getShipMap())