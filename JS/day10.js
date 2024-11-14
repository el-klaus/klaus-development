//advanced array methode
//maap - forEach

let numbers = [1,2,3,4,5,6,7,8,9]
numbers.forEach((x,y,z)=>{
    console.log(x);
    
    document.write(x)
})


//numbers.map((num)=>{
    // return(
    //console.log(num)
 //   )
//})

//numbers.map(num => console.log(nun)
//)



//filter

let oddNumbers = numbers.filter( x => x % 2 !== 0)

console.log(oddNumbers);

let evenNumbers = numbers.filter( x => x % 2 == 0)

console.log(evenNumbers);

//find

let two = numbers.find(x => x % 2 === 0)

console.log(two);


let fruits = [`apple`, `watermelon`, `mango`, `orange`]

let sortedWords = fruits.sort()

console.log(sortedWords);

let num = [12, 34, 78, 19, 57,78]

let sortednums = num.sort(
    (a,b) => a - b
)

console.log(sortednums);

let good = [1, 2, 3, 4, 5, 6, 7, 8,]

let result= good.map(x => x * x ).filter(x=> x <= 10).sort((a,b) => b - a)

console.log(result);







