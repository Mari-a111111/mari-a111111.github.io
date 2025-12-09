let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCard;

function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = cart.length;
}

function openQuantityModal(card) {
  if (card.querySelector('.soon')) return;
  currentCard = card;
  document.getElementById('quantityModal').style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function goToCart() {
  location.href = 'cart.html';
}


document.getElementById('addToCartBtn')?.addEventListener('click', () => {
  const qty = document.getElementById('quantityInput').value;
  const name = currentCard.dataset.name;
  const price = parseInt(currentCard.dataset.price);

  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += Number(qty);
  } else {
    cart.push({ name, price, qty: Number(qty) });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  closeModal('quantityModal');
  document.getElementById('addedModal').style.display = 'flex';
});


document.getElementById('cartIcon')?.addEventListener('click', () => {
  cart.length === 0 ? 
    document.getElementById('emptyCartModal').style.display = 'flex' : 
    goToCart();
});

if (location.pathname.includes('cart.html')) {
  const tbody = document.getElementById('cartItems');

  function renderCart() {
    tbody.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const sum = item.price * item.qty;
      total += sum;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()} ₴</td>
        <td>
          <input type="number" class="quantity-input" value="${item.qty}" min="1" data-index="${index}">
        </td>
        <td>${sum.toLocaleString()} ₴</td>
        <td><button class="remove-btn" data-index="${index}">×</button></td>
      `;
      tbody.appendChild(tr);
    });

    document.getElementById('totalSum').textContent = total.toLocaleString() + ' грн.';
  }


  tbody.addEventListener('change', (e) => {
    if (e.target.classList.contains('quantity-input')) {
      const index = e.target.dataset.index;
      const newQty = Number(e.target.value);
      if (newQty > 0) {
        cart[index].qty = newQty;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
      }
    }
  });

  tbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartCount();
    }
  });

  renderCart();
}


updateCartCount();
document.querySelectorAll('.buy_btn').forEach(btn => {
  if (!btn.classList.contains('soon')) {
    btn.onclick = () => openQuantityModal(btn.closest('.card'));
  }
});