import currencyFormatter from "currency-formatter";

export function formatCurrency(currencyValue: number) {
  return currencyFormatter.format(currencyValue, {
    symbol: "",
    decimal: ".",
    thousand: ",",
    precision: 0,
    format: "%v", // %s is the symbol and %v is the value
  });
}
