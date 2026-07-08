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

console.log("Products loaded successfully!");

// --- NEW SKILL: DISPLAYING PRODUCTS WITH IMAGES ---

// 1. We grab the products grid from HTML
const productsGrid = document.getElementById("products-grid");

function displayProducts() {
    // Clear the grid before displaying
    productsGrid.innerHTML = "";

    // Loop through our tech products
    products.forEach(function(product) {
        // Create a card container for the product
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Inject the HTML inside the card (including the image URL!)
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p class="category">${product.category}</p>
            <p class="price">${product.price} GMD</p>
            <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart 🛒</button>
        `;

        // Push the card into our HTML grid
        productsGrid.appendChild(productCard);
    });
}

// Function placeholder for the cart (we will code it next!)
function addToCart(productId) {
    console.log("Product clicked! ID:", productId);
}

// Launch the display
displayProducts();