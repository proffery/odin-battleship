import Ship from "./Ship"
const BOARD_SIZE = 8
const gameboard = (() => {
    const fleet = [
        {   name: 'Juggernaut',
            length: new Ship(4)},
        {   name: 'Dreadnought',
            length: new Ship(3)},
        {   name: 'Dreadnought',
            length: new Ship(3)},
        {   name: 'Battlecruiser',
            length: new Ship(2)},
        {   name: 'Battlecruiser',
            length: new Ship(2)},
        {   name: 'Battlecruiser',
            length: new Ship(2)},
        {   name: 'Monitor',
            length: new Ship(1)},
        {   name: 'Monitor',
            length: new Ship(1)},
        {   name: 'Monitor',
            length: new Ship(4)},
    ]
    const board = new Array(BOARD_SIZE)
    board.forEach(element => element = new Array(board.length));

    function setShips(fleet) {

    }

    return {}
})()

export default gameboard