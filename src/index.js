import './styles/style.css'
import Ship from './Ship'

const ship = new Ship('Juggernaut', 4, [0,0], true)
ship.setShipMap([4,3])
console.log(ship.getShipMap())
