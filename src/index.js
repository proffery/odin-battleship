import './styles/style.css'
import Ship from './Ship'
import gameboard from './Gameboard'
import render from './render'
const aiBoard = document.querySelector('.ai-ships')
const playerBoard = document.querySelector('.player-ships')
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

    startButton.addEventListener('click', () => {
        gameboard.cleanAiBoard()
        gameboard.cleanPlayerBoard()
        render.cleanBoard(aiBoard)
        render.cleanBoard(playerBoard)
        setPlayerShips(gameboard.getPlayerBoard())
    })
}

function setPlayerShips(board) {
    render.setPlayerShipsWindow(board)
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