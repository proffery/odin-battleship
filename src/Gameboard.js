import Ship from "./Ship"
// const BOARD_SIZE = 8
const gameboard = (() => {
    const fleet = [
        {
            shipName: 'Juggernaut',
            shipLength: 4,
            shipNumber: 1
        },
        {
            shipName: 'Dreadnought',
            shipLength: 3,
            shipNumber: 2
        },
        {   
            shipName: 'Battlecruiser',
            shipLength: 2,
            shipNumber: 3
        },
        {   
            shipName: 'Monitor',
            shipLength: 1,
            shipNumber: 4
        }
    ]
    const board = new Array(8)
    board.forEach(element => element = new Array(board.length));

    function setShips(fleet) {

    }



    return {}
})()

export default gameboard