import Ship from "./Ship.js"

const shipVertical00 = new Ship('Juggernaut', 4, [0,0], true)
test('Get Map of Juggernaut with lenght: 4, head location: [0,0], isVertical: TRUE', () => {
    expect(shipVertical00.getShipMap()).toStrictEqual([
        [true,  false, false, false, false, false, false, false],
        [true,  false, false, false, false, false, false, false],
        [true,  false, false, false, false, false, false, false],
        [true,  false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const shipHorisontal00 = new Ship('Juggernaut', 4, [0,0], false)
test('Get Map of Juggernaut with lenght: 4, head location: [0,0], isVertical: FALSE', () => {
    expect(shipHorisontal00.getShipMap()).toStrictEqual([
        [true,  true,  true,  true,  false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const shipVertical33 = new Ship('Juggernaut', 4, [3,3], true)
test('Get Map of Juggernaut with lenght: 4, head location: [3,3], isVertical: TRUE', () => {
    expect(shipVertical33.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, true,  false, false, false, false],
        [false, false, false, true,  false, false, false, false],
        [false, false, false, true,  false, false, false, false],
        [false, false, false, true,  false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const shipHorisontal33 = new Ship('Juggernaut', 4, [3,3], false)
test('Get Map of Juggernaut with lenght: 4, head location: [3,3], isVertical: FALSE', () => {
    expect(shipHorisontal33.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, true,  true,  true,  true,  false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const shipVertical43 = new Ship('Juggernaut', 4, [4,3], true)
test('Get Map of Juggernaut with lenght: 4, head location: [4,3], isVertical: TRUE', () => {
    expect(shipVertical43.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, true,  false, false, false],
        [false, false, false, false, true,  false, false, false],
        [false, false, false, false, true,  false, false, false],
        [false, false, false, false, true,  false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const shipHorisontal43 = new Ship('Juggernaut', 4, [4,3], false)
test('Get Map of Juggernaut with lenght: 4, head location: [4,3], isVertical: FALSE', () => {
    expect(shipHorisontal43.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, true,  true,  true,  true],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const shipVertical55 = new Ship('Juggernaut', 4, [5,5], true)
test('Get Map of Juggernaut with lenght: 4, head location: [5,5], isVertical: TRUE', () => {
    expect(shipVertical55.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, true],
    ])
})

const shipHorisontal55 = new Ship('Juggernaut', 4, [5,5], false)
test('Get Map of Juggernaut with lenght: 4, head location: [5,5], isVertical: FALSE', () => {
    expect(shipHorisontal55.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, true,  true,  true,  true],
    ])
})