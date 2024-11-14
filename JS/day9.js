let b = ["house", 12,11,13,14,16]

//map
console.log(b);


let b1 = b.map((num)=> num * num)
console.log(b1);

//SYNCHRONOUS, ASYNCHRONOUS-ASYNC, CLIENT, SERVER,API,JSON REQUEST,AWAIT,PROMISE

//APIs - ENDPOINT- URL

const fetctDisplayProduct = async () => {
    const URL = `https://fakestoreapi.com/products`
    try {  // runs when 
        const response = await fetch(URL)

        const products = await response.json()
       
        displayProducts(products)

    } catch (error) { //runs when fetch is unsuccessfull

    console.log("error displaying", error);
    alert("error displaying product, check console for more information")
    
        
    }
  }

   //function to displasy on our document

   const displayProducts = (products)=> {
    const productList = document.querySelector(`.product-list`)
  
    let productHTML = ""

    products.forEach(product  => {
      console.log(product);

      productHTML +=`
       <div class="w-full rounded-md shadow p-3 m-2">
            <h1 class="text-4xl font-bold uppercase text-center">${product.title}</h1>
            <img src=${product.image} alt=${product.title.slice(0,3)}class="w-[15rem] h-[15rem] max-auto rounded-md">
            <p class=" text-center text-md text-gray-400">${product.description} </p>
            <p class="text-sm">${product.category} </p>
            <p class=" text-red-500 fontbond text-md">$${product.price} </p>
            <span class="font-bold">rating: <span>${product.rating.rate} (${product.rating.count} reviews )</span></span>
        </div>
      `
      productList.innerHTML = productHTML
    });
   }

   fetctDisplayProduct()