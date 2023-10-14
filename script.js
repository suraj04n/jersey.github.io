document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
   
    const products = [
    { name: "India Jersey", price: "Rs.5999", image: "./images/ind.jpg" },
    { name: "Australia Jersey", price: "Rs.5999", image: "./images/aus.jpg" },
    { name: "Pakistan Jersey", price: "Rs.5999", image: "./images/pak.jpg" },
    { name: "Bangladesh Jersey", price: "Rs.5999", image: "./images/bangla.jpg" },
    { name: "New Zealand Jersey", price: "Rs.5999", image: "./images/nz.jpg" },
    { name: "England Jersey", price: "Rs.5999", image: "./images/eng.jpg" },
    { name: "South Africa Jersey", price: "Rs.5999", image: "./images/sa.jpg" },
    { name: "Netherlands Jersey", price: "Rs.5999", image: "./images/nl.png" },
    { name: "Scotland Jersey", price: "Rs.5999", image: "./images/sct.jpg" },
    { name: "Ireland Jersey", price: "Rs.5999", image: "./images/ire.jpg" },
    { name: "Zimbabwe Jersey", price: "Rs.5999", image: "./images/zimb.jpg" },
    { name: "West Indies Jersey", price: "Rs.5999", image: "./images/west.jpg" },
];
   
    products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
   
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
   
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
   
    const priceElement = document.createElement("p");
    priceElement.textContent = product.price;
   
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
   
    productsList.appendChild(productElement);
    });
   
    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
   
    scrollToProductsLink.addEventListener("click", function (event) {
    event.preventDefault();
   
    featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
    });
