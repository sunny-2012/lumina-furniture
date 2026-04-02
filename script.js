// ==================== PRODUCTS DATA ====================
const products = [
  { id: 1, name: "Velvet Lounge Chair", price: 8999, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzUENwxYUr82XIdPBSIY8mjBFgAi_1B18B5wqF2vPUOggt-YIo969i9dnClusB1O8SqLbCcz1ZKOuq5-h1EhTtjzWgC2tDvCsqqIto8E6K" },
  { id: 2, name: "Marble Coffee Table", price: 12490, img: "https://m.media-amazon.com/images/I/715++v7L9mL._AC_UF894,1000_QL80_.jpg" },
  { id: 3, name: "Scandinavian Sofa", price: 18999, img: "https://sohnne.com/wp-content/uploads/2023/10/image-109.png" },
  { id: 4, name: "Oak Dining Set", price: 24600, img: "https://craftersandweavers.com/cdn/shop/files/19_700x700.png?v=1760678545" },
  { id: 5, name: "Magnus 3 Door Engineered Wood Wardrobe", price: 30500, img: "https://www.nilkamalhomes.com/cdn/shop/files/Magnus_3D_WRB_LS01_500x@2x.jpg?v=1763717177" },
  { id: 6, name: "Orval 4 Seater Dining Set", price: 24500, img: "https://www.nilkamalhomes.com/cdn/shop/files/ORVAL4SEATERDININGKITLS_500x@2x.jpg?v=1732873601" },
  { id: 7, name: "Futon Sofa Bed", price: 35800, img: "https://i5.walmartimages.com/seo/Muumblus-Small-Foldable-Loveseat-2-Seater-Convertible-Futon-Sofa-Bed-Adjustable-Backrest-Velvet-Couch-Black_b0366073-0717-4e27-9ee0-626124e7f959.0192948bf5e89fafebc1658b3753975a.jpeg" },
  { id: 8, name: "Portland LHS Sofa With Lounger & Storage", price: 72900, img: "https://www.nilkamalhomes.com/cdn/shop/files/FLSFPORTLANDSBLBWN_Portland_03_500x@2x.jpg?v=1712388879" },
  { id: 9, name: "Trundle Bed", price: 37799, img: "https://images-cdn.ubuy.co.in/667d3b4ad879fa79496f92ef-max-lily-solid-wood-twin-size-trundle.jpg" },
  { id: 10, name: "Harper 3 Seater Fabric Sofa", price: 34900, img: "https://www.nilkamalhomes.com/cdn/shop/files/HARPER3STRLS1_500x@2x.jpg?v=1722236023" },
  { id: 11, name: "Kingsley Solid Wood Side Table with Magzine Rack", price: 5900, img: "https://www.nilkamalhomes.com/cdn/shop/products/FLSTKINGSLEYREDWLT_1_500x@2x.jpg?v=1664796633" },
  { id: 12, name: "Somerville 1 Seater Fabric Sofa", price: 23900, img: "https://www.nilkamalhomes.com/cdn/shop/products/Somerville1str_front_500x@2x.jpg?v=1750921757" },
  { id: 13, name: "Karla Solid Wood Side Table", price: 9500, img: "https://www.nilkamalhomes.com/cdn/shop/products/KarlaSideTable_500x@2x.jpg?v=1671169948" },
  { id: 14, name: "Ottoman Bed", price: 1249, img: "https://m.media-amazon.com/images/I/91aM9UpBBzL.jpg" },
  { id: 15, name: "Raven Wooden 3 Door Wardrobe", price: 22900, img: "https://www.nilkamalhomes.com/cdn/shop/files/RAVEN-3-DOOR-WARDROBE-LS01_e84d25df-d078-4fb8-9945-7253dbe5a6b2_500x@2x.jpg?v=1754896758" },
  { id: 16, name: "Cooper 3 Seater Fabric Sofa ", price: 34500, img: "https://www.nilkamalhomes.com/cdn/shop/files/Cooper3strLSfrontGrey_500x@2x.jpg?v=1749535084" },
  { id: 17, name: "Orval 1 + 2 + Bench Dining Set ", price: 19700, img: "https://www.nilkamalhomes.com/cdn/shop/files/ORVAL1_2_BENCHDININGKITLS_500x@2x.jpg?v=1732873636" },
  { id: 18, name: "Sleigh Bed", price: 50500, img: "https://libertyfurn-public-assets.s3.us-east-2.amazonaws.com/products/bedroom/575-br/575-br-qsl_large.jpg" },
  { id: 19, name: "Tripod Side Table (Walnut)", price: 15500, img: "https://www.nilkamalhomes.com/cdn/shop/files/TRIPODSIDETABLELS_500x@2x.jpg?v=1741599603" },
  { id: 20, name: "Prince Dining Chair (Milan Walnut)", price: 8900, img: "https://www.nilkamalhomes.com/cdn/shop/files/PRINCEDININGCHAIR01_800x_4e7d6df9-a449-4c0e-b0e9-fed146d3341b_500x@2x.jpg?v=1728452880" },
];
let cart = [];

// Render Products
// Render Products - Fixed for both themes
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="relative overflow-hidden">
        <img src="${p.img}" class="product-img w-full h-72 object-cover" alt="${p.name}">
        <button onclick="addToCart(${p.id}); event.stopImmediatePropagation()" 
          class="absolute bottom-4 right-4 bg-white hover:bg-amber-700 hover:text-white shadow-lg w-11 h-11 rounded-2xl transition-all flex items-center justify-center
                dark:bg-white dark:hover:bg-amber-700 dark:text-zinc-900 dark:hover:text-white">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="p-6">
        <h3 class="font-semibold text-xl mb-1">${p.name}</h3>
        <p class="text-amber-700 dark:text-amber-400 text-2xl font-medium">${formatPrice(p.price)}</p>
      </div>
    </div>
  `).join('');
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  // Check if item already exists
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  
  const toast = document.createElement('div');
  toast.className = "fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white px-6 py-3 rounded-2xl shadow-2xl z-[100]";
  toast.innerHTML = `✅ ${product.name} added to cart`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

//  currency changer
let currentCurrency = "INR";   // default INR
const exchangeRate = 0.011;    // 1 INR ≈ 0.011 USD 

function formatPrice(priceInINR) {
  if (currentCurrency === "INR") {
    return `₹${priceInINR}`;
  } else {
    const usdPrice = (priceInINR * exchangeRate).toFixed(2);
    return `$${usdPrice}`;
  }
}

function changeCurrency() {
  currentCurrency = document.getElementById('currency-select').value;
  renderProducts();   // products refresh
  renderCart();       // cart bhi refresh
}

// Update Cart Count
function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

// Toggle Cart Sidebar
function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  sidebar.classList.toggle('open');
  if (sidebar.classList.contains('open')) {
    renderCart();
  }
}

// Render Cart Items
function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 text-gray-400 dark:text-gray-500">
        <i class="fa-solid fa-shopping-bag text-6xl mb-4"></i>
        <p class="text-xl">Your cart is empty</p>
      </div>`;
    totalEl.textContent = '$0';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, index) => {
    total += item.price * item.quantity;
    return `
      <div class="cart-item flex gap-4 mb-8">
        <img src="${item.img}" class="w-20 h-20 object-cover rounded-2xl">
        <div class="flex-1">
          <h4 class="font-medium">${item.name}</h4>
          <p class="text-amber-700 dark:text-amber-400">$${item.price}</p>
          
          <div class="flex items-center gap-3 mt-3">
            <button onclick="changeQuantity(${index}, -1)" class="quantity-btn">-</button>
            <span class="w-8 text-center font-medium">${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)" class="quantity-btn">+</button>
          </div>
        </div>
        <button onclick="removeFromCart(${index})" class="text-red-500 text-2xl hover:text-red-600 mt-1">×</button>
      </div>`;
  }).join('');

  totalEl.textContent = `$${total}`;
}

// Change Quantity
function changeQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  renderCart();
}

// Remove Item
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCart();
}

// Clear All
function clearCart() {
  if (confirm("Clear all items from cart?")) {
    cart = [];
    updateCartCount();
    renderCart();
  }
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert(`🎉 Thank you for shopping with LUMINA!\n\nTotal Amount: ${document.getElementById('cart-total').textContent}\n\nThis is a demo - Checkout page coming soon!`);
  cart = [];
  updateCartCount();
  toggleCart();
}

// ==================== THEME TOGGLE ====================
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  
  html.classList.toggle('dark');
  
  if (html.classList.contains('dark')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');

  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.add('fa-sun');
  }
}

// ==================== AUTH FUNCTIONS (Minimal) ====================
function showAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
  switchTab(0);
}

function hideAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function switchTab(tab) {
  document.getElementById('login-form').classList.toggle('hidden', tab !== 0);
  document.getElementById('signup-form').classList.toggle('hidden', tab !== 1);
  
  document.getElementById('login-tab').classList.toggle('border-b-2', tab === 0);
  document.getElementById('login-tab').classList.toggle('text-amber-700', tab === 0);
  document.getElementById('signup-tab').classList.toggle('text-amber-700', tab === 1);
}

// Handle Signup - Real PHP Connection
async function handleSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (!name || !email || !password) {
    alert("❌ All fields are required!");
    return;
  }

  try {
    const response = await fetch('signup.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    });

    const data = await response.json();

    if (data.status === "success") {
      alert("✅ Account created successfully!\nYou can now login.");
      hideAuthModal();
      switchTab(0);
    } else {
      alert("❌ " + (data.message || "Signup failed!"));
    }
  } catch (err) {
    alert("❌ Cannot connect to server. Make sure XAMPP Apache is running.");
  }
}

// Handle Login - Real PHP + Update Navbar
// Handle Login - Fixed (closes modal + updates navbar)
async function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!email || !password) {
    alert("❌ Email and password are required!");
    return;
  }

  try {
    const response = await fetch('login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    });

    const data = await response.json();

    if (data.status === "success") {
      hideAuthModal();                    // Close modal
      updateNavbarAfterLogin(data.name);  // Show username + dropdown
      // Clear form fields
      document.getElementById('login-email').value = '';
      document.getElementById('login-password').value = '';
    } else {
      alert("❌ " + data.message);
    }
  } catch (err) {
    alert("❌ Cannot connect to server.");
  }
}

// Full Dropdown with Logout (as it was yesterday)
function updateNavbarAfterLogin(name) {
  const oldBtn = document.querySelector('button[onclick="showAuthModal()"]');
  if (!oldBtn) return;

  oldBtn.outerHTML = `
    <div class="relative group account-dropdown">
      <button onclick="toggleDropdown()" class="flex items-center gap-2 font-semibold hover:text-amber-700 transition">
        <i class="fa-solid fa-user"></i>
        <span>${name}</span>
        <i class="fa-solid fa-chevron-down text-xs"></i>
      </button>
      
      <div id="user-dropdown" class="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 z-50 border">
        <a href="#" onclick="viewProfile(); return false;" class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-gray-700 text-sm">👤 My Profile</a>
        <a href="#" onclick="viewOrders(); return false;" class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-gray-700 text-sm">📦 My Orders</a>
        <hr class="my-1">
        <button onclick="logout()" class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 text-sm font-medium">
          🚪 Logout
        </button>
      </div>
    </div>
  `;
}

function toggleDropdown() {
  const dropdown = document.getElementById('user-dropdown');
  dropdown.classList.toggle('hidden');
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    location.reload();
  }
}

function viewProfile() {
  alert("👤 Profile page coming soon!");
  toggleDropdown();
}

function viewOrders() {
  alert("📦 My Orders page coming soon!");
  toggleDropdown();
}

function updateNavbarAfterLogin(name) {
  const btn = document.querySelector('button[onclick="showAuthModal()"]');
  if (btn) btn.innerHTML = `<i class="fa-solid fa-user"></i> ${name}`;
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  loadTheme();
});