import implement, { Interface, type } from 'implement-js'
 
const Passenger = Interface('Passenger')({
    name: type("string"),
    height: type("number")
})
 
const ChildPassenger = Interface('ChildPassenger')({
    hasBabySeat: type("boolean")
}, {
    extend: Passenger
})
 
const Car = Interface('Car')({
    speed: type("number"),
    passengers: type("array", [type('object', Passenger), type('object', ChildPassenger)]),
    beep: type("function")
}, { error: true })
 
// Successful implementation
const MyCar = implement(Car)({
    speed: 0,
    passengers: [],
    beep () {}
})
 
// Bad implementation - does not implement the beep method
const AnotherCar = implement(Car)({
    speed: 0,
    passengers: []
})