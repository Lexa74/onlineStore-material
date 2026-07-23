// ------ Функция пересчёта и отображения ------
function updateCartUI() {
    // Находим все элементы корзины на странице
    const items = document.querySelectorAll('.cart-item');
    let total = 0;

    items.forEach((itemEl, index) => {
        // Берём соответствующий товар из массива
        const product = checkoutProducts[index];
        // Ищем поле количества
        const quantityInput = itemEl.querySelector('.cart-item__quantity-input');
        // Обновляем значение в input
        quantityInput.value = product.quantity;

        // Считаем сумму для этого товара
        const itemTotal = product.price * product.quantity;

        // Добавляем к общей сумме
        total += itemTotal;
    });

    // Обновляем общую сумму в форме
    document.querySelector('.checkout-form__total-price').textContent = (total.toLocaleString('ru-RU') + ' руб.');
}

// ------ Обработка изменения количества ------
function changeQuantity(productId, delta) {
    const product = checkoutProducts.find(p => p._id === productId);
    if (!product) return;
    product.quantity = Math.max(1, product.quantity + delta);
    updateCartUI();
}

export function counter(e) {
    // Кнопка увеличить
    if (e.target.classList.contains('checkout__button_increment')) {
        const id = e.target.dataset.id;
        changeQuantity(id, 1);
    }
    // Кнопка уменьшить
    if (e.target.classList.contains('checkout__button_decrement')) {
        const id = e.target.dataset.id;
        changeQuantity(id, -1);
    }
}