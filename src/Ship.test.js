import Ship from "./Ship.js"

const ship4Vertical00 = new Ship(4, [0,0], true)
test('Get Map of ship with lenght: 4, head location: [0,0], isVertical: TRUE', () => {
    expect(ship4Vertical00.getShipMap()).toStrictEqual([
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

test('Get Area of ship with lenght: 4, head location: [0,0], isVertical: TRUE', () => {
    expect(ship4Vertical00.getShipArea()).toStrictEqual([
        [true,  true, false, false, false, false, false, false],
        [true,  true, false, false, false, false, false, false],
        [true,  true, false, false, false, false, false, false],
        [true,  true, false, false, false, false, false, false],
        [true,  true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})


for(let i = 0; i < ship4Vertical00.getShipLength(); i++) {
    ship4Vertical00.hit()
}

test('Is sunk ship with lenght: 4, head location: [0,0], isVertical: TRUE', () => {
    expect(ship4Vertical00.isSunk()).toBe(true)
})

const ship4Horisontal00 = new Ship(4, [0,0], false)
test('Get Map of ship with lenght: 4, head location: [0,0], isVertical: FALSE', () => {
    expect(ship4Horisontal00.getShipMap()).toStrictEqual([
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
test('Get Area of ship with lenght: 4, head location: [0,0], isVertical: FALSE', () => {
    expect(ship4Horisontal00.getShipArea()).toStrictEqual([
        [true,  true,  true,  true,  true, false, false, false],
        [true,  true,  true,  true,  true, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const ship4Vertical33 = new Ship(4, [3,3], true)
test('Get Map of ship with lenght: 4, head location: [3,3], isVertical: TRUE', () => {
    expect(ship4Vertical33.getShipMap()).toStrictEqual([
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
test('Get Area of ship with lenght: 4, head location: [3,3], isVertical: TRUE', () => {
    expect(ship4Vertical33.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, true,  true,  true, false, false, false],
        [false, false, true,  true,  true, false, false, false],
        [false, false, true,  true,  true, false, false, false],
        [false, false, true,  true,  true, false, false, false],
        [false, false, true,  true,  true, false, false, false],
        [false, false, true,  true,  true, false, false, false],
    ])
})

const ship4Horisontal33 = new Ship(4, [3,3], false)
test('Get Map of ship with lenght: 4, head location: [3,3], isVertical: FALSE', () => {
    expect(ship4Horisontal33.getShipMap()).toStrictEqual([
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
test('Get Area of ship with lenght: 4, head location: [3,3], isVertical: FALSE', () => {
    expect(ship4Horisontal33.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, true,  true,  true,  true,  true,  true],
        [false, false, true,  true,  true,  true,  true,  true],
        [false, false, true,  true,  true,  true,  true,  true],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const ship4Vertical43 = new Ship(4, [4,3], true)
test('Get Map of ship with lenght: 4, head location: [4,3], isVertical: TRUE', () => {
    expect(ship4Vertical43.getShipMap()).toStrictEqual([
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
test('Get Area of ship with lenght: 4, head location: [4,3], isVertical: TRUE', () => {
    expect(ship4Vertical43.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, true,  true,  true,  false, false],
        [false, false, false, true,  true,  true,  false, false],
        [false, false, false, true,  true,  true,  false, false],
        [false, false, false, true,  true,  true,  false, false],
        [false, false, false, true,  true,  true,  false, false],
        [false, false, false, true,  true,  true,  false, false],
    ])
})

const ship4Horisontal43 = new Ship(4, [4,3], false)
test('Get Map of ship with lenght: 4, head location: [4,3], isVertical: FALSE', () => {
    expect(ship4Horisontal43.getShipMap()).toStrictEqual([
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
test('Get Area of ship with lenght: 4, head location: [4,3], isVertical: FALSE', () => {
    expect(ship4Horisontal43.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const ship4Vertical55 = new Ship(4, [5,5], true)
test('Get Map of ship with lenght: 4, head location: [5,5], isVertical: TRUE', () => {
    expect(ship4Vertical55.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, false, false],
        [false, false, false, false, false, true, false, false],
        [false, false, false, false, false, true, false, false],
        [false, false, false, false, false, true, false, false],
    ])
})
test('Get Area of ship with lenght: 4, head location: [5,5], isVertical: TRUE', () => {
    expect(ship4Vertical55.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, true,  true,  true, false],
        [false, false, false, false, true,  true,  true, false],
        [false, false, false, false, true,  true,  true, false],
        [false, false, false, false, true,  true,  true, false],
        [false, false, false, false, true,  true,  true, false],
    ])
})

const ship4Horisontal55 = new Ship(4, [5,5], false)
test('Get Map of ship with lenght: 4, head location: [5,5], isVertical: FALSE', () => {
    expect(ship4Horisontal55.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, true,  true,  true,  true],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})
test('Get Area of ship with lenght: 4, head location: [5,5], isVertical: FALSE', () => {
    expect(ship4Horisontal55.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, false, false, false, false, false],
    ])
})

const ship4Vertical56 = new Ship(4, [5,6], true)
test('Get Map of ship with lenght: 4, head location: [5,6], isVertical: TRUE', () => {
    expect(ship4Vertical56.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, false, false],
        [false, false, false, false, false, true, false, false],
        [false, false, false, false, false, true, false, false],
        [false, false, false, false, false, true, false, false],
    ])
})
test('Get Area of ship with lenght: 4, head location: [5,6], isVertical: TRUE', () => {
    expect(ship4Vertical56.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, true,  true,  true,  false],
        [false, false, false, false, true,  true,  true,  false],
        [false, false, false, false, true,  true,  true,  false],
        [false, false, false, false, true,  true,  true,  false],
        [false, false, false, false, true,  true,  true,  false],
    ])
})

const ship4Horisontal56 = new Ship(4, [5,6], false)
test('Get Map of ship with lenght: 4, head location: [5,6], isVertical: FALSE', () => {
    expect(ship4Horisontal56.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, true,  true,  true,  true],
        [false, false, false, false, false, false, false, false],
    ])
})
test('Get Area of ship with lenght: 4, head location: [5,6], isVertical: FALSE', () => {
    expect(ship4Horisontal56.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, true,  true,  true,  true,  true],
    ])
})

const ship4Vertical77 = new Ship(4, [7,7], true)
test('Get Map of ship with lenght: 4, head location: [7,7], isVertical: TRUE', () => {
    expect(ship4Vertical77.getShipMap()).toStrictEqual([
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
test('Get Area of ship with lenght: 4, head location: [7,7], isVertical: TRUE', () => {
    expect(ship4Vertical77.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, true,  true],
        [false, false, false, false, false, false, true,  true],
        [false, false, false, false, false, false, true,  true],
        [false, false, false, false, false, false, true,  true],
        [false, false, false, false, false, false, true,  true],
    ])
})

const ship4Horisontal77 = new Ship(4, [7,7], false)
test('Get Map of ship with lenght: 4, head location: [7,7], isVertical: FALSE', () => {
    expect(ship4Horisontal77.getShipMap()).toStrictEqual([
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
test('Get Area of ship with lenght: 4, head location: [7,7], isVertical: FALSE', () => {
    expect(ship4Horisontal77.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, true,  true,  true,  true,  true],
        [false, false, false, true,  true,  true,  true,  true],
    ])
})

const ship1Vertical00 = new Ship(1, [0,0], true)
test('Get Map of ship with lenght: 1, head location: [0,0], isVertical: TRUE', () => {
    expect(ship1Vertical00.getShipMap()).toStrictEqual([
        [true,  false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})
test('Get Area of ship with lenght: 1, head location: [0,0], isVertical: TRUE', () => {
    expect(ship1Vertical00.getShipArea()).toStrictEqual([
        [true,  true,  false, false, false, false, false, false],
        [true,  true,  false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})

const ship1Horisontal70 = new Ship(1, [7,0], false)
test('Get Map of ship with lenght: 1, head location: [7,0], isVertical: FALSE', () => {
    expect(ship1Horisontal70.getShipMap()).toStrictEqual([
        [false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})
test('Get Area of ship with lenght: 1, head location: [7,0], isVertical: FALSE', () => {
    expect(ship1Horisontal70.getShipArea()).toStrictEqual([
        [false, false, false, false, false, false, true,  true],
        [false, false, false, false, false, false, true,  true],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ])
})