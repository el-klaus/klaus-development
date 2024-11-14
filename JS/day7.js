let date = new Date()

console.log(date);

console.log(
    date.getFullYear()
);

console.log(
    date.getMilliseconds()
);

console.log(
    date.getMonth()
    
);

console.log(
    date.getDate()
);



let timestamp = date.getTime()

console.log(timestamp);


let date2 = new Date(1730297551920)
console.log(date2);


setTimeout(()=>{
    console.log("set timeout");
    
}, 3000)

const interval1 = setInterval(()=>{
    console.log("interval");

}, 2000)

setTimeout(()=>{
    clearInterval(interval1)
    console.log("cleared");
    

}, 10000)

let date3 = new Date()

setTimeout(()=>{
    console.log(date3);
    
}, 5000)