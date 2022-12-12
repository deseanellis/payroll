import NationalInsuranceRates from "../data/NationalInsuranceRates";
import INationalInsuranceRate from "../interfaces/INationalInsuranceRate";

export default function GetNationalInsuranceRate(
  monthlySalary: number
): INationalInsuranceRate | null {
  for (let i = 0; i < NationalInsuranceRates.length; i++) {
    let rate = NationalInsuranceRates[i];
    if (
      monthlySalary >= rate.monthlyEarnings.lower &&
      monthlySalary <= rate.monthlyEarnings.upper
    )
      return rate;
  }

  return null;
}
