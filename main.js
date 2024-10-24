const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');



// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    if (quantity < 0){
        totalPriceElement.textContent = "Invalid";
    } else {
    totalPriceElement.textContent = totalPrice.toFixed(2);
    }
}

//2. Add Event Listener for Product Selection
productSelector.addEventListener('change', () => {
    updateTotalPrice();
});


//3. Calculate Total Price Dynamically
quantityInput.addEventListener('input', () => {
    updateTotalPrice();
});

//Handle Order Submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});