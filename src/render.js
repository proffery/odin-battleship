import soundFileStartGame from './audio/startBattleSound.mp3'
import Ship from './Ship'
const AI_BOARD_NAME = 'AI-Zone:'
const PLAYER_BOARD_NAME = 'Player-Zone'
const render = (() => {
    const mainContainer = document.querySelector('.main-container')
    function startGameWindow() {
        const startWindow = document.createElement('div')
        startWindow.classList.add('start-window')
        startWindow.textContent = 'Start new game?'
        mainContainer.appendChild(startWindow)
        const startButton = document.createElement('div')
        startButton.classList.add('start-button')
        startButton.textContent = 'Start!'
        startWindow.appendChild(startButton)
        let startSound = new Audio(soundFileStartGame)
        startWindow.appendChild(startSound)
        startSound.setAttribute('controls', '')
        startSound.setAttribute('controlslist', 'nodownload noplaybackrate')
        //startSound.setAttribute('autoplay', '')
        //startSound.play()
        startButton.addEventListener('click', () => {
            startWindow.remove(),
            startSound.pause()
        })
    }

    function setShipsOnBoard(boardArray, boardContainer) {
        for(let i = 0; i < boardArray.length; i++) {
            const row = document.createElement('div')
            row.classList.add('row')
            boardContainer.appendChild(row)
            for(let j = 0; j < boardArray[i].length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.setAttribute('row', i)
                cell.setAttribute('col', j)
                if(boardArray[i][j]) {
                    cell.classList.add('ship')
                }
                row.appendChild(cell)
            }

        }
    }

    function cleanContainer(container) {
        while (container.hasChildNodes()) {
            container.firstChild.remove()
        }
    }

    function setPlayerShipsWindow(boardArray, fleet) {
        const playerShipsWindow = document.createElement('div')
        playerShipsWindow.classList.add('set-player-window')
        mainContainer.appendChild(playerShipsWindow)
        const windowHeader = document.createElement('div')
        windowHeader.textContent = 'Set ships on the board!'
        playerShipsWindow.appendChild(windowHeader)
        const setPlayerBoard = document.createElement('div')
        setPlayerBoard.classList.add('set-player-board')
        playerShipsWindow.appendChild(setPlayerBoard)
        setShipsOnBoard(boardArray, setPlayerBoard)
        renderFleet(fleet, playerShipsWindow)
    }
    
    function renderFleet(fleet, container) {
        for (let i = 0; i < fleet.length; i++) {
            for (let j = 0; j < fleet[i].shipNumber; j++) {
                const shipInfoContainer = document.createElement('div')
                shipInfoContainer.classList.add('ship-for-set')
                shipInfoContainer.setAttribute('type', i)
                shipInfoContainer.setAttribute('number', j)
                shipInfoContainer.setAttribute('value', fleet[i].shipLength)
                for(let n = 0; n < fleet[i].shipLength; n++) {
                    shipInfoContainer.textContent += '□'
                }
                container.appendChild(shipInfoContainer)
                shipInfoContainer.addEventListener('mousedown', () => {
                    shipInfoContainer.remove()
                })
            }
        }
    }

    function info(fleetArray, infoContainer) {
        fleetArray.forEach(ship => {
            if(!ship.isSunk()) {
                const shipInfoContainer = document.createElement('div')
                shipInfoContainer.classList.add('ship-not-sunk')
                for(let i = 0; i < ship.getShipLength(); i++) {
                    shipInfoContainer.textContent += '□'
                }
                shipInfoContainer.textContent += ` - ${generateShipName(ship)}`
                infoContainer.appendChild(shipInfoContainer)
            }
            else{
                const shipInfoContainer = document.createElement('div')
                shipInfoContainer.classList.add('ship-is-sunk')
                for(let i = 0; i < ship.getShipLength(); i++) {
                    shipInfoContainer.textContent += '☒'
                }
                shipInfoContainer.textContent += ` - ${generateShipName(ship)}`
                infoContainer.appendChild(shipInfoContainer)
            }
        });
    }

    function generateShipName(ship) {
        switch (ship.getShipLength()) {
            case 1:
                return 'Monitor'
            case 2:
                return 'Battlecruiser'
            case 3:
                return 'Dreadnought'
            case 4:
                return 'Juggernaut'
            default: 
                return 'Coloss'
        }
    }
    
return {startGameWindow, setShipsOnBoard, cleanContainer, setPlayerShipsWindow, info}
})()

export default render