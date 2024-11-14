let goo = (user)=> {
    console.log(`wellcome ${user}`);
    if (typeof "string" == "string") {
        alert("welcome" + user); }
        

    else{
        alert("invalid user " + "!");  

        }
}
 
let i = prompt("enter your name")

goo(i)

//function checkInput() {
  //  let userInput = document.getElementById("nameInput").value;

    //if (typeof userInput !== 'string') {
      //  alert("Invalid input");
   // } else {
     //   alert("Hello, " + userInput + "!");
   // }
//}


