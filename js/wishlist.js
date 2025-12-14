
function renderWishlist() {
  const wishlistContainer = document.querySelector(".wishlist-content");

  wishlistContainer.querySelectorAll(".wishlist-item").forEach((el) =>
    el.remove()
  );

  let total = 0;
  let totalCount = 0;

  wishlist.forEach((item) => {
    totalCount++;           
    total += item.price;  

    const wishlistItem = document.createElement("div");
    wishlistItem.classList.add("wishlist-item");
    wishlistItem.style.display = "flex";
    wishlistItem.style.alignItems = "center";
    wishlistItem.style.justifyContent = "space-between";
    wishlistItem.style.padding = "0.5rem 0";

    wishlistItem.innerHTML = `
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="wishlist-item-image ${item.id}"></div>
        <span>${item.name}</span>
      </div>
      <span>€ ${item.price.toLocaleString()}</span>
    `;
    wishlistContainer.appendChild(wishlistItem);
  });

  
  const totalEl = document.getElementById("wishlist-total");
  const countEl = document.getElementById("wishlist-count");

  if (totalEl) totalEl.textContent = total.toLocaleString();
  if (countEl) countEl.textContent = totalCount;
}
