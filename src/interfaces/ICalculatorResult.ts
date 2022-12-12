import IIncomeTaxRate from "./IIncomeTaxRate";

export default interface ICalculatorResult {
  weeks: number;
  grossSalary: number;
  nis: number;
  paye: IIncomeTaxRate;
  hs: number;
  netSalaryAverage: number;
  netSalaryActual: number;
}
