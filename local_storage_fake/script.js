
async function fakeapi(){
    let res = await fetch("https://fakestoreapi.com/products")
    let fakedata = await res.json();
    let storage=[]
    
    let data = fakedata.map((val)=>{
        var parent = document.querySelector(".main")
        let card = document.createElement("div")
        card.className ="card"
        card.innerHTML=`
        <img src=${val.image}>
        <h2> Title : ${val.title}</h2>
        <h2> Price : ${val.price}</h2>
        <h3>Rating: ${val.rating.rate}</h3>
        `
        let btn = document.createElement("button")
        btn.textContent="add to wishlist"
        btn.addEventListener("click",()=>{
            storage.push(val)
            localStorage.setItem("wishlist",JSON.stringify(storage))
            alert("selected item added to wishlist")
        })
        card.appendChild(btn)
        parent.appendChild(card)
    })
}

fakeapi()

function wishlist(){
    window.open("wishlist.html","_self")
}