//arrays- holds more data type 

let a = [ 12, 24, "hello", true, null ]

console.log(a);

console.log(
    a[3]
);
console.log(
    a.push(20000),a
);

console.log(
    a.pop(), a
);

console.log(
    a.shift(8999), a
);

console.log(
    a.unshift(4540),a
);

console.log(
    a.includes("hello")
);

//OBJECTS

let car = {
    name: "toyota camery",
    engine: "v6",
    brand: "suv",
    year: 2022
}
console.log(car);

console.log(car.engine);
console.log(car.year);


function greet() {
    console.log("hello king klaus");
    
}
 greet()
//arrow /callback
 const greet2 = () => {
    console.log( "hello klaus 2");
 }

greet2()

//parameter and arguments

let greetings = (user)=> {
    console.log( "hello" + user);
    
}

greetings ("wick")

let goo = (user)=> {
    console.log(`wellcome ${user}`);  
}
 
let i = prompt("enter your name")
goo(i)
alert(`welcome ${user}`)


if ('SpeechRecognition' in window) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-Uk'; // Set your desired language
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        alert(`You said: ${transcript}`);
    };

    recognition.start();
} else {
    alert('Sorry, your browser does not support speech recognition.');
}
