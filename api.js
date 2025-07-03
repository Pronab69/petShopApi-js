

const loadcata= async()=>{

    try{
           const loadcata=await fetch("https://openapi.programming-hero.com/api/peddy/categories")
const catagori=await loadcata.json()
showcata(catagori.categories)
    }
    catch(e){
console.log(e)
    }


}

loadcata()


const showcata =(catagories)=>
{
for(const cata of catagories)
{
   
   const show_cata = document.getElementById("show_cata")
   const catadiv=document.createElement("div")

  
   catadiv.innerHTML=`
  <button class="btn my-btn " onclick="loadpets('${cata.category}')">  ${cata.category}  <img class="w-6" src=${cata.category_icon} alt=""></button>
 
   `
   show_cata.appendChild(catadiv)

}
   const btn =document.getElementsByClassName("my-btn")
   if (btn.length > 0) {
  btn[0].classList.add("bg-red-500");
}
for(const bt of btn)
{
  bt.addEventListener("click", (event) => {
    for(  const ev of btn )
    {
        ev.classList.remove("bg-red-500")
    }
  event.currentTarget.classList.add("bg-red-500");
});
}
}

const loadpets  = async(pets)=>
{
  document.getElementById("spiner").classList.remove("hidden")
const respo=await fetch(`https://openapi.programming-hero.com/api/peddy/category/${pets}`)
const datas= await respo.json()
if(datas.data)
{
    document.getElementById("spiner").classList.add("hidden")
    
}
showpets(datas.data)
}



const showpets=(pets)=>{

    if(pets.length<1)
    {
        const notfound=document.getElementById("notfound")
notfound.classList.remove("hidden")
    }
    else{
         notfound.classList.add("hidden")
    }
   
   const showPets = document.getElementById("showPets")
 showPets.innerHTML = "";
 pets.forEach((pet)=>{
   
  const div = document.createElement("div")
 
  div.innerHTML=`
  <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img class="w-3/4"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${pet.breed}</h2>
    <p>${pet.pet_details.slice(0,100)}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-buy btn-primary">Buy Now</button>
      <button onclick="petdetais(${pet.petId})">details</button>
    </div>
  </div>
</div>
  ` 
showPets.appendChild(div)
 
}
 
)

const btnbuy= document.getElementsByClassName("btn-buy ")
for(const btn of btnbuy)
{
 btn.addEventListener("click",function(ent){
  const name= this.parentNode.parentNode.childNodes[1].innerText
const showtitile=document.getElementById("showtitile")
const div1=document.createElement("div")
div1.classList.add("mx-4")
div1.innerHTML=`
<h1>${name}</h1>
<button id="deletetitle" class="btn">delete</button>
`
showtitile.appendChild(div1)
const cartcount=parseFloat(document.getElementById("cart-count").innerText)
const sum=cartcount+1 
document.getElementById("cart-count").innerText=sum
document.getElementById("itemCount").innerText=document.getElementById("cart-count").innerText
 })
}
}
  loadpets("cat")

  const petdetais= async(pet)=>{
    
const petdtail= await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${pet}`)
const data=await petdtail.json()
petdata(data.petData)

  }

  const petdata=(data)=>
  {
    
const showpetdata =document.getElementById("showpetdata")
const div=document.createElement("div")

div.innerHTML=`
<h2>${data.breed}</h2>
<p>${data.category}</p>
<p>${data.date_of_birth}</p>
<p>${data.price}</p>

<img src=${data.image} alt="">

<p>${data.gender}</p>

<p>${data.pet_details}</p>
 
<p>${data.vaccinated_status?data.vaccinated_status:"not-found"}</p>

<p>${data.pet_name}</p>
 
<p>${data.petId}</p>
<hr>
`
showpetdata.appendChild(div)
const modal=document.getElementById("hideModal")
modal.classList.remove("hidden")
  }

  