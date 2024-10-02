let fakedata = JSON.parse(localStorage.getItem("wishlist")) || [];
let wishlistimg =document.querySelector("#img")
wishlistimg.style.display = fakedata.length ==0 ? "block" : "none";

fakedata.forEach((val, index) => {
    var parent = document.querySelector(".main");
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src=${val.image} alt="Product Image">
        <h2>Title: ${val.title}</h2>
        <h2>Price: $${val.price}</h2>
        <h3>Rating: ${val.rating.rate}</h3>
    `;

    let btn = document.createElement("button");
    btn.textContent = "Remove from Wishlist";
    btn.addEventListener("click", () => {
        fakedata = fakedata.filter((item, i) => i !== index);
        localStorage.setItem("wishlist", JSON.stringify(fakedata));
        wishlistimg.style.display = fakedata.length ==0 ? "block" : "none";
        card.remove();
        alert("Selected item removed from wishlist");
    });

    card.appendChild(btn);
    parent.appendChild(card);
});
