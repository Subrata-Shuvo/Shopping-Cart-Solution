function updateProductNumber(product, price, isIncreasing) {
    const caseProductInput = document.getElementById(product + '-number');
    let productNumber = caseProductInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseProductInput.value = productNumber;

    // updating  total

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber *
        price;

    // calculate total
    calculateTotal();

}

function getInputValue(product) {
    const productInput =
        document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}


function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxTotal = subTotal / 10;
    const totalPrice = subTotal + taxTotal;
    // update on the html
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxTotal;
    document.getElementById('total-price').innerText = totalPrice;
}


// phone increase decrease event

document.getElementById("phone-plus").addEventListener('click', function() {
    updateProductNumber('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1119, false)
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber("case", 59, true);
});

document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false)
})