const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: TotalPrice): number => {
  const priceWithDiscount = discount ? price * ((100 - discount) / 100) : price;
  if (isInstallment) {
    return priceWithDiscount / months;
  } else {
    return priceWithDiscount;
  }
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price);

interface TotalPrice {
  price: number;
  discount: number | null;
  isInstallment: boolean;
  months: number;
}
