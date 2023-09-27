const contAiner = document.querySelector(".container")
















const products = [
    {
        name:"Red t-Shirt",
        price :120,
        imageUrl : "./red.jpg "
    },

    {
        name:"Black t-Shirt",
        price :150,
        imageUrl : "./black.png "
    },

    {
        name:"Blue t-Shirt",
        price :220,
        imageUrl : "./blue.jpg "
    }
]


products.forEach(product =>{
    contAiner.innerHTML += `
    <nav class="pro1">
<div class="one">
    <img src="${product.imageUrl}"/>
    <article>
    <h2>${product.name}</h2>
    <span>${product.price}</span>
    </article>

</div>


    <div class="two">

    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="#33363F" stroke-width="2" />
    <path d="M18.0002 29.9993L30.0002 17.9993" stroke="#33363F" stroke-width="2" />
    <path d="M30 30L18 18" stroke="#33363F" stroke-width="2" />

</svg>






<div class="ptn">
<button class="minus-btn">-</button>
<button class="pro-btn">0</button>
<button class="plus-btn">+</button>

</div>
   


    </div>
    </nav>
    `

})








const minusBtn = document.querySelector(".minus-btn")

const plusBtn = document.querySelector(".plus-btn")








plusBtn.forEach(btn =>{

    plusBtn.addEventListener("click" ,function()
    {
       
   
    
    
        
    
        const amount = parseInt(this.textContent)
        this.textContent = amount + 1
      
    }
    )


})





plusBtn.forEach(btn =>{
minusBtn.addEventListener("click" ,function()
{
  




    const amount = parseInt(this.textContent)
    this.textContent = amount - 1
  
}
)

})










