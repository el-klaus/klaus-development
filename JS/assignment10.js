
let score = prompt("score")
if (score <= 39 && score >=0 ) {
    console.log("F"); 

} else if (score <=49  && score >=40) {
    console.log("D");
}
else if (score <=59  && score >=50) {
    console.log("C");
}
else if (score <=69  && score >=60) {
    console.log("B");
}
else if (score <=100  && score >=70) {
    console.log("A");
}
else {
    console.log("invalid");
    
}

console.log();
