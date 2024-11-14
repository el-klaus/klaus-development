

let car = {
    name: "toyota",
    engine: "v6",
    color: "green",

}

console.log(car.color);

const {engine,name} = car

console.log(engine,);



const home = [12, null, {name:"john wick", dog: true, age:30}, "hello"]

const [a,,b] = home

console.log(b.name);


let array = [12, 3,"john wick", "dog", true, "hello"]

let array2 = [...home,...array]

console.log(array2);

export const bank = "dollar"

const greeting = "hello world"
export default greeting

