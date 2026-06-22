let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("count").innerText = cartCount;

    alert("Product Added To Cart");
}