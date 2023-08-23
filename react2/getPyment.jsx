function getPaymentMethod(name) {
    return <li className={"payment-method option-" + name.toLowerCase()}>{name}</li>
}

// sample usage (do not modify)
console.log(getPaymentMethod("Card"));
console.log(getPaymentMethod("Paypal"));
