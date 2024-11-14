//switch

let day = "monday"
switch (day) {
    case "monday":
        console.log(1);
        break;
    case "tuesday":
        console.log(2);   

    default:
        console.log(7);
}
//loops
// for loops
//initializatin

for (let x = 7; x <=9; x++) {
    console.log("hello"); 
}

let j = 1 // initialization

while (j <= 5) {
    console.log(j); //condition

    j++ //increment or decrement
    
    
}
for (let x = 1; x <=6; x++) {
    console.log(x);
    
}

// for each loops
let number= [1, 2, 3, 4, 5]
number.forEach((a,b,c) =>{
    console.log(a,b,c);
    
})

let fruit = ["apple,orange,mango"]

fruit.forEach((jjj)=>{
    console.log(
        jjj.toUpperCase()
    );
    
} )
let sum = 0

let num = [1,2,3,4,5 ]

num.forEach((num) =>{
    let square = 0
    square =   num*num
    sum += square
    console.log(
        `the square of ${num} is ${square}`
    
    );
})
 console.log(`the sum of square is ${sum}`);

 let n=5
 let fact = 1
 //n*(n-1)
//2! =2*1
//3! =3*2*1
//5! = 5*4*3*2*1

//i=1
//fact =1*1=1

//i=2
//fact =1*2=2

//i=3
//fact =2*3=6










for (let i = 1; i <=n; i++){
        fact = fact  * i;
}
console.log(`factoria`);




 
