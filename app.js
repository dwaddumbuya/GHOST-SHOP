// Our Tech Products (Data)
const products = [
    {
        id: 1,
        name: "Wireless Headphones Pro",
        price: 4500, // Price in Dalasis
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        category: "Audio"
    },
    {
        id: 2,
        name: "Smartphone AMOLED 5G",
        price: 25000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        category: "Phone"
    },
    {
        id: 3,
        name: "Mechanical Gaming Keyboard",
        price: 3200,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
        category: "Accessories"
    },
    {
        id: 4,
        name: "UltraWide Monitor 32'",
        price: 18500,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        category: "Screen"
    }
];

// The Cart (Empty at the beginning)
let cart = [];

// 1. We grab our HTML sections
const productsGrid = document.getElementById("products-grid");
const cartSection = document.getElementById("cart-section");

// 2. Function to display tech products with their images
function displayProducts() {
    productsGrid.innerHTML = "";

    products.forEach(function(product) {
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p class="category">${product.category}</p>
            <p class="price">${product.price} GMD</p>
            <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart 🛒</button>
        `;

        productsGrid.appendChild(productCard);
    });
}

// 3. Function to add a product to the cart array
function addToCart(productId) {
    const productFound = products.find(product => product.id === productId);
    
    if (productFound) {
        cart.push(productFound);
        displayCart(); // Update the screen
    }
}

// 4. Function to calculate total and display the cart
function displayCart() {
    if (cart.length === 0) {
        cartSection.innerHTML = "<h2>Your Cart is empty 🛒</h2>";
        return;
    }

    let totalPrice = 0;
    let cartHTML = "<h2>Your Cart 🛒</h2><ul>";

    cart.forEach(function(item) {
        cartHTML += `<li>${item.name} - ${item.price} GMD</li>`;
        totalPrice += item.price;
    });

    cartHTML += "</ul>";
    cartHTML += `<h3>Total: <span style="color: #a6e3a1;">${totalPrice} GMD</span></h3>`;

    cartSection.innerHTML = cartHTML;
}

// --- LAUNCH EVERYTHING ---
displayProducts();
displayCart();

console.log("Ghost-Shop core loaded successfully! 🚀");
function loginUser() {
    let userName = prompt("What is your name?");
    console.log(userName);
}
