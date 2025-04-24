export interface TotalPrice {
  price: number;
  discount: number | null;
  isInstallment: boolean;
  months: number;
}
