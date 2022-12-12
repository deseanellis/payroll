/* eslint-disable no-extend-native */
declare global {
  interface Number {
    toCurrency(): number;
    formatCurrency(): string;
  }
}

Number.prototype.toCurrency = function (): number {
  return Number(this.toFixed(2));
};

Number.prototype.formatCurrency = function (): string {
  return "$" + this.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export {};
