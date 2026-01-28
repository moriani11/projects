
function renderProducts() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const article = document.createElement("article");
    article.classList.add("product-card");
    article.innerHTML = `
            <div class="product-image ${product.id}">
                <button class="btn-wishlist-icon" data-id="${
                  product.id
                }">🤍</button>
                <button class="btn-cart-icon" data-id="${
                  product.id
                }">🛒</button>
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="price">€ ${product.price.toLocaleString()}</p>
                <p>${product.description || ""}</p>
            </div>
        `;
    productList.appendChild(article);
  });

  setupButtons();  
}


function setupButtons() {
  document.querySelectorAll(".btn-cart-icon").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      const product = products.find((p) => p.id === id);
      const cartItem = cart.find((p) => p.id === id);

      if (cartItem) cartItem.quantity++;
      else cart.push({ ...product, quantity: 1 });

      renderCart();
    });
  });

  document.querySelectorAll(".btn-wishlist-icon").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const button = e.currentTarget;
      const id = button.dataset.id;
      const wishedItem = products.find((p) => p.id === id);

      const alreadyInWishlist = wishlist.some((p) => p.id === id);

      if (!alreadyInWishlist) {
        wishlist.push({ ...wishedItem, quantity: 1 });
        button.textContent = "❤️";  
      } else {
        wishlist = wishlist.filter((p) => p.id !== id);
        button.textContent = "🤍";  
      }

      renderWishlist();
    });
  });
}

