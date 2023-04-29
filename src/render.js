import gameboard from './Gameboard'
import soundFileStartGame from './audio/startBattleSound.mp3'

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
            game(),
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

    function game() {

    }


return {startGameWindow, setShipsOnBoard}
})()

export default render