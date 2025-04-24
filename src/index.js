var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    var priceWithDiscount = discount ? price * ((100 - discount) / 100) : price;
    if (isInstallment) {
        return priceWithDiscount / months;
    }
    else {
        return priceWithDiscount;
    }
};
var price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
