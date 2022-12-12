import IIncomeTaxRate from "../interfaces/IIncomeTaxRate";

const YEARLY_TAX_ALLOWANCE = 84000;

export default function GetIncomeTax(
  monthlySalary: number,
  weeklyInsuranceContribution: number,
  weeks: number
): IIncomeTaxRate {
  //YEARLY CALCULATIONS
  let yearlyInsuranceTaxDeductible = weeklyInsuranceContribution * 52 * 0.7;
  let totalYearlyTaxAllowance =
    YEARLY_TAX_ALLOWANCE + yearlyInsuranceTaxDeductible;
  let yearlyTaxableIncome = monthlySalary * 12 - totalYearlyTaxAllowance;

  if (yearlyTaxableIncome < 0) yearlyTaxableIncome = 0;

  let monthlyAverageIncomeTax = (yearlyTaxableIncome * 0.25) / 12;

  //MONTHLY CALCULATIONS
  let monthlyTaxAllowance = YEARLY_TAX_ALLOWANCE / 12;
  let monthlyInsuranceTaxDeductible = weeklyInsuranceContribution * weeks * 0.7;

  let totalMonthlyTaxAllowance =
    monthlyTaxAllowance + monthlyInsuranceTaxDeductible;
  let monthlyTaxableIncome = monthlySalary - totalMonthlyTaxAllowance;

  if (monthlyTaxableIncome < 0) monthlyTaxableIncome = 0;

  let monthlyActualIncomeTax = monthlyTaxableIncome * 0.25;

  return {
    monthlyActual: monthlyActualIncomeTax.toCurrency(),
    monthlyAverage: monthlyAverageIncomeTax.toCurrency(),
  };
}
