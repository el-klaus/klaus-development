//events, event listeners
// click, submit

//select the element
let button =document.querySelector(`#btn`)


// add event listener

button.addEventListener("click", ()=>{
    console.log("button clicked");
    
})

let form = document.querySelector(`#kk`)

let a =["nicholas@yahoo.com",245245]




form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log("form submitted");

    const user = event.target.user.value
    const  your = event.target.your.value
    const password = event.target.password.value

    console.log(user);
    console.log(your);
    console.log(password);

        if (your == a[0] && password == a[1]) {
            greet.textContent = `welcome, ${user}`
            alert("hello")
          
        } else {
            greet.textContent = `Incorrect Email or password`
            alert("try again")
        }
     target
    
})