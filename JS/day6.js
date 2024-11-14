document.write("hello world")

//console.log(
//    document.getElementsByTagName(`h1`)
//);

//let x = document.getElementsByTagName(`h1`)

//console.log(x);

console.log(
    document.getElementsByClassName(`one`)
);

console.log(
    document.getElementById(`two`)
);


let y = document.querySelector(`h3`)



//y.classList.add(`box`)
//console.log(
  //  y
//);

y.classList.toggle(`box`)

let z = document.getElementsByClassName(`one`)

console.log(z); //array

let z0 = z[0]// object


console.log(z0);

let z1=z0.innerText

console.log(z1);

console.log(
    z[0].innerText);

let p = document.querySelector(`.five`)

p.textContent = "updated text"
p.innerHTML = "<span>hello 2</span>"

console.log(p);

//date constructor

console.log(
    new Date()
);

p.innerHTML = new Date()
console.log(p.textContent);


