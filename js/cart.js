/* ---------------- Render Cart ---------------- */
function renderCart() {
    const cartContainer = document.querySelector(".cart-content");
    cartContainer.querySelectorAll(".cart-item").forEach(el => el.remove());

    let total = 0, totalCount = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalCount += item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.style.display = "flex";
        cartItem.style.alignItems = "center";
        cartItem.style.justifyContent = "space-between";
        cartItem.style.padding = "0.5rem 0";

        cartItem.innerHTML = `
            <div style="display:flex; align-items:center; gap:1rem; flex:1;">
                <div class="cart-item-image ${item.id}"></div>
                <span>${item.name}</span>
            </div>
            <div style="display:flex; gap:1rem; align-items:center;">
                <span>${item.quantity}</span>
                <span>€ ${(item.price * item.quantity).toLocaleString()}</span>
                <button class="btn-cart-remove" data-id="${item.id}">❌</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
document.getElementById("cart-total").textContent = total.toLocaleString();
document.getElementById("cart-count").textContent = totalCount;

setupCartRemoveButtons();

}
function setupCartRemoveButtons() {
  document.querySelectorAll(".btn-cart-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      
      cart = cart.filter((item) => item.id !== id);
      renderCart();
    });
  });
}