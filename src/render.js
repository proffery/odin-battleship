import soundFileStartGame from './audio/startBattleSound.mp3'
const mainContainer = document.querySelector('.main-container')


const render = (() => {
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
        //startSound.setAttribute('controlslist', 'play volume')
        startSound.setAttribute('autoplay', '')
        startSound.play()
        startButton.addEventListener('click', () => {
            startWindow.remove(),
            game(),
            startSound.pause()
        })
    }

    function game() {

    }


return {startGameWindow}
})()

export default render