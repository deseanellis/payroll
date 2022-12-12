export default function GetHealthSurcharge(monthlySalary: number): number {
  if (monthlySalary > 469.99) return 8.25;

  return 4.8;
}
