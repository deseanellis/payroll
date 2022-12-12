import INationalInsuranceRate from "../interfaces/INationalInsuranceRate";

const NationalInsuranceRates: Array<INationalInsuranceRate> = [
  {
    earningClass: "N/A",
    monthlyEarnings: {
      lower: 0,
      upper: 866.99,
    },
    employeeWeeklyContribution: 0,
    employerWeeklyContribution: 0,
    totalWeeklyContribution: 0,
  },
  {
    earningClass: "I",
    monthlyEarnings: {
      lower: 867,
      upper: 1472.99,
    },
    employeeWeeklyContribution: 11.9,
    employerWeeklyContribution: 23.8,
    totalWeeklyContribution: 35.7,
  },
  {
    earningClass: "II",
    monthlyEarnings: {
      lower: 1473,
      upper: 1949.99,
    },
    employeeWeeklyContribution: 17.4,
    employerWeeklyContribution: 34.8,
    totalWeeklyContribution: 52.2,
  },
  {
    earningClass: "III",
    monthlyEarnings: {
      lower: 1950,
      upper: 2642.99,
    },
    employeeWeeklyContribution: 23.3,
    employerWeeklyContribution: 46.6,
    totalWeeklyContribution: 69.9,
  },
  {
    earningClass: "IV",
    monthlyEarnings: {
      lower: 2643,
      upper: 3292.99,
    },
    employeeWeeklyContribution: 30.1,
    employerWeeklyContribution: 60.2,
    totalWeeklyContribution: 90.3,
  },
  {
    earningClass: "V",
    monthlyEarnings: {
      lower: 3293,
      upper: 4029.99,
    },
    employeeWeeklyContribution: 37.2,
    employerWeeklyContribution: 74.4,
    totalWeeklyContribution: 111.6,
  },
  {
    earningClass: "VI",
    monthlyEarnings: {
      lower: 4030,
      upper: 4852.99,
    },
    employeeWeeklyContribution: 45.1,
    employerWeeklyContribution: 90.2,
    totalWeeklyContribution: 135.3,
  },
  {
    earningClass: "VII",
    monthlyEarnings: {
      lower: 4853,
      upper: 5632.99,
    },
    employeeWeeklyContribution: 53.2,
    employerWeeklyContribution: 106.4,
    totalWeeklyContribution: 159.6,
  },
  {
    earningClass: "VIII",
    monthlyEarnings: {
      lower: 5633,
      upper: 6456.99,
    },
    employeeWeeklyContribution: 61.4,
    employerWeeklyContribution: 122.8,
    totalWeeklyContribution: 184.2,
  },
  {
    earningClass: "IX",
    monthlyEarnings: {
      lower: 6457,
      upper: 7409.99,
    },
    employeeWeeklyContribution: 70.4,
    employerWeeklyContribution: 140.8,
    totalWeeklyContribution: 211.2,
  },
  {
    earningClass: "X",
    monthlyEarnings: {
      lower: 7410,
      upper: 8276.99,
    },
    employeeWeeklyContribution: 79.6,
    employerWeeklyContribution: 159.2,
    totalWeeklyContribution: 238.8,
  },
  {
    earningClass: "XI",
    monthlyEarnings: {
      lower: 8277,
      upper: 9272.99,
    },
    employeeWeeklyContribution: 89.1,
    employerWeeklyContribution: 178.2,
    totalWeeklyContribution: 267.3,
  },
  {
    earningClass: "XII",
    monthlyEarnings: {
      lower: 9273,
      upper: 10312.99,
    },
    employeeWeeklyContribution: 99.4,
    employerWeeklyContribution: 198.2,
    totalWeeklyContribution: 298.2,
  },
  {
    earningClass: "XIII",
    monthlyEarnings: {
      lower: 10313,
      upper: 11396.99,
    },
    employeeWeeklyContribution: 110.2,
    employerWeeklyContribution: 220.4,
    totalWeeklyContribution: 330.6,
  },
  {
    earningClass: "XIV",
    monthlyEarnings: {
      lower: 11397,
      upper: 12652.99,
    },
    employeeWeeklyContribution: 122.1,
    employerWeeklyContribution: 244.2,
    totalWeeklyContribution: 366.3,
  },
  {
    earningClass: "XV",
    monthlyEarnings: {
      lower: 12653,
      upper: 13599.99,
    },
    employeeWeeklyContribution: 133.3,
    employerWeeklyContribution: 266.6,
    totalWeeklyContribution: 399.9,
  },
  {
    earningClass: "XVI",
    monthlyEarnings: {
      lower: 13600,
      upper: Number.MAX_VALUE,
    },
    employeeWeeklyContribution: 133.3,
    employerWeeklyContribution: 266.6,
    totalWeeklyContribution: 399.9,
  },
];

export default NationalInsuranceRates;
