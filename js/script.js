//product script,cart management amnd cookie management
const products = [
  {
    name: "Stethoscope",
    image: "../images/stetho.jpg",
     description: "High-quality acoustic stethoscope.",
    price: "$45"
  },
  {
    name: "Crutch",
    image: "../images/crutch.jpg",
    description: "Aluminum crutch for walking support.",
    price: "$30"
  },
  {
    name: "Diabetes Machine",
    image: "../images/diabetesmachine.jpg",
    description: "Blood glucose monitor with test strips.",
    price: "$50"
  },
  {
    name: "Back Massager",
    image: "../images/back.jpg",
    description: "Electric back massager with heat.",
    price: "$60"
  },
  {
    name: "Syringe Pack",
    image: "../images/syringepack.jpg",
    description: "Pack of sterile medical syringes.",
    price: "$15"
  },
  {
    name: "Firt Aid Kit",
    image: "../images/firstaidkit.jpg",
    description: "Pack of sterile medical syringes.",
    price: "$15"
  },
  {
    name: "CPR Monitor",
    image: "../images/cprmonitor.png",
    description: "Pack of sterile medical syringes.",
    price: "$15"
  },
  {
    name: "IBU profen",
    image: "../images/ibuprofen.jpg",
    description: "Pack of sterile medical syringes.",
    price: "$15"
  },
  {
    name: "Wheelchair",
    image: "../images/wheelchair.jpg",
    description: "Pack of sterile medical syringes.",
    price: "$15"

  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onclick="showDescription('${product.description}')">View</button>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

function showDescription(desc) {
  const box = document.getElementById("descriptionBox");
  box.innerText = desc;
}

function addToCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert(`${name} has been added to your cart!`);

}



function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = `Cart (${cart.length})`;
}

function acceptCookies() {
  document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
  document.getElementById("cookieBanner").style.display = "none";
}

function declineCookies() {
  document.cookie = "cookiesAccepted=false; max-age=31536000; path=/";
  document.getElementById("cookieBanner").style.display = "none";
}


function loadEmail() {
  const saved = localStorage.getItem("userGmail");
  const display = document.getElementById("savedEmailDisplay");
  if (saved && display) {
    display.textContent = `📧 Saved Email: ${saved}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCount();
  loadEmail();

  // Cookie banner
  if (!document.cookie.includes("cookiesAccepted=true")) {
    document.getElementById("cookieBanner").style.display = "flex";
  }

  // Contact form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("userEmail").value.trim();
      if (email.endsWith("@gmail.com")) {
        localStorage.setItem("userGmail", email);
        loadEmail();
        alert("Email saved!");
        form.reset();
      } else {
        alert("Please enter a valid Gmail address.");
      }
    });
  }
});
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}




//cart script
const allProducts = [
  {
    name: "Stethoscope",
    image: "../images/stetho.jpg",
    description: "High-quality acoustic stethoscope.",
    price: "$45"
  },
  {
    name: "Crutch",
    image: "../images/crutch.jpg",
    description: "Aluminum crutch for walking support.",
    price: "$30"
  },
  {
    name: "Diabetes Machine",
    image: "../images/diabetesmachine.jpg",
    description: "Blood glucose monitor with test strips.",
    price: "$50"
  },
  {
    name: "Back Massager",
    image: "../images/back.jpg",
    description: "Electric back massager with heat.",
    price: "$60"
  },
  {
    name: "Syringe Pack",
    image: "../images/syringepack.jpg",
    description: "Pack of sterile medical syringes.",
    price: "$15"
  },
  {
    name: "Firt Aid Kit",
    image: "../images/firstaidkit.jpg",
    description: "Basic first aid essentials.",
    price: "$15"
  },
  {
    name: "CPR Monitor",
    image: "../images/cprmonitor.png",
    description: "CPR monitoring device for training.",
    price: "$15"
  },
  {
    name: "IBU profen",
    image: "../images/ibuprofen.jpg",
    description: "Pain relief tablets.",
    price: "$15"
  },
  {
    name: "Wheelchair",
    image: "../images/wheelchair.jpg",
    description: "Manual folding wheelchair.",
    price: "$15"
  }
];

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length && typeof cart[0] === "string") {
    cart = cart.map(name => ({ name, quantity: 1 }));
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const grid = document.getElementById("cartGrid");
  grid.innerHTML = "";

  if (cart.length === 0) {
    grid.innerHTML = "<p>Your Cart is empty.</p>";
    updateCartCount();
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const product = allProducts.find(p => p.name === item.name);
    if (product) {
      const price = parseFloat(product.price.replace("$", ""));
      const quantity = item.quantity || 1;
      const itemTotal = price * quantity;
      total += itemTotal;

      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>$${price.toFixed(2)} x ${quantity} = $${itemTotal.toFixed(2)}</strong></p>
        <button onclick="updateQuantity('${product.name}', 1)">+</button>
        <button onclick="updateQuantity('${product.name}', -1)">-</button>
        <button onclick="removeFromCart('${product.name}')">Remove</button>
      `;
      grid.appendChild(div);
    }
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "description-box";
  totalDiv.innerHTML = `
    <h3>Total: $${total.toFixed(2)}</h3>
    <button class="checkout-btn" onclick="checkout()">Checkout</button>
  `;
  grid.appendChild(totalDiv);

  updateCartCount();
}

function checkout() {
  alert("Thank you for your purchase! 🛒");
  localStorage.removeItem("cart");
  loadCart();
}

function addToCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

function updateQuantity(name, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(p => p.name === name);

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(p => p.name !== name);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
}

function removeFromCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length && typeof cart[0] === "string") {
    cart = cart.map(name => ({ name, quantity: 1 }));
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  let totalQuantity = 0;
  cart.forEach(item => {
    totalQuantity += item.quantity || 1;
  });

  if (countElement) {
    countElement.innerText = `Cart (${totalQuantity})`;
  }
}

document.addEventListener("DOMContentLoaded", loadCart);





