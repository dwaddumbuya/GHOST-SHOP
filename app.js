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


// --- NEW SKILL: CART MANAGEMENT & ACCUMULATION ---

// 1. We grab the cart section from HTML
const cartSection = document.getElementById("cart-section");

// 2. Function to add a product to the cart
function addToCart(productId) {
    // Find the product in our database using its ID
    const productFound = products.find(product => product.id === productId);

    // Push it inside our cart array
    cart.push(productFound);

    // Refresh the cart display
    displayCart();
}

// 3. Function to calculate the total and display the cart on screen
function displayCart() {
    // If the cart is empty
    if (cart.length === 0) {
        cartSection.innerHTML = "<h2>Your Cart is empty 🛒</h2>";
        return;
    }

    // If we have items, let's calculate the total price
    let totalPrice = 0;
    let cartHTML = "<h2>Your Cart 🛒</h2><ul>";

    // Loop through the items in the cart
    cart.forEach(function(item) {
        cartHTML += `<li>${item.name} - ${item.price} GMD</li>`;
        totalPrice += item.price; // Accumulate the price
    });

    cartHTML += "</ul>";
    
    // Add the total price at the bottom of the list
    cartHTML += `<h3>Total: <span style="color: #a6e3a1;">${totalPrice} GMD</span></h3>`;

    // Inject everything into our HTML cart section
    cartSection.innerHTML = cartHTML;
}

// Launch displayCart once at the beginning to show "Cart is empty"
displayCart();