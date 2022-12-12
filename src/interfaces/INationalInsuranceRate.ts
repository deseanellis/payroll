type MonthlyEarnings = {
  lower: number;
  upper: number;
};
export default interface INationalInsuranceRate {
  earningClass: string;
  monthlyEarnings: MonthlyEarnings;
  employeeWeeklyContribution: number;
  employerWeeklyContribution: number;
  totalWeeklyContribution: number;
}
