import { ChangeEvent, useEffect, useState } from "react";
import MonthSelector from "./components/MonthSelector";
import YearSelector from "./components/YearSelector";
import GetMondays from "./utils/GetMondays";
import Header from "./sections/Header";
import Body from "./sections/Body";
import FormCard from "./components/FormCard";
import ResultCard from "./components/ResultCard";
import TextInput from "./components/TextInput";
import ICalculatorInputs from "./interfaces/ICalculatorInputs";
import ICalculatorResult from "./interfaces/ICalculatorResult";
import GetHealthSurcharge from "./utils/GetHealthSurcharge";
import GetNationalInsuranceRate from "./utils/GetNationalInsuranceRate";
import GetIncomeTax from "./utils/GetIncomeTax";
import IResultData from "./interfaces/IResultData";
import { Months } from "./components/MonthSelector";
import Footer from "./sections/Footer";
import FormatZeroValue from "./utils/FormatZeroValue";
import TextInputType from "./enums/TextInputType";
import InputValidators from "./utils/InputValidators";
import InputValidatorType from "./enums/InputValidatorType";

const CurrentDate = new Date();

const Settings = {
  dateRangeLimit: 5,
  defaultWeeks: GetMondays(CurrentDate.getFullYear(), CurrentDate.getMonth()),
};

function App() {
  const [calculatorInputs, setCalculatorInputs] = useState<ICalculatorInputs>({
    weeks: Settings.defaultWeeks,
    monthlySalary: 0,
    monthlyOvertime: 0,
    monthlyAllowances: 0,
  });

  const [calculatorResult, setCalculatorResult] = useState<ICalculatorResult>({
    weeks: Settings.defaultWeeks,
    grossSalary: 0,
    nis: 0,
    paye: { monthlyActual: 0, monthlyAverage: 0 },
    hs: 0,
    netSalaryAverage: 0,
    netSalaryActual: 0,
  });

  const [resultData, setResultData] = useState<Array<IResultData>>([]);

  useEffect(() => {
    let monthSelector = document.getElementById(
      "month-selector"
    ) as HTMLSelectElement;

    let weekData: IResultData = {
      title: "Weeks",
      value: calculatorResult.weeks,
      isCurrency: false,
    };
    let salaryData: IResultData = {
      title: "Gross Monthly Salary",
      value: calculatorResult.grossSalary,
      isCurrency: true,
    };
    let nisData: IResultData = {
      title: "Monthly NIS",
      value: calculatorResult.nis,
      isCurrency: true,
    };
    let hsData: IResultData = {
      title: "Monthly Health Surcharge",
      value: calculatorResult.hs,
      isCurrency: true,
    };
    let payeAverageData: IResultData = {
      title: "Monthly PAYE (Yearly Average)",
      value: calculatorResult.paye.monthlyAverage,
      isCurrency: true,
    };
    let payeActualData: IResultData = {
      title: `${Months[Number(monthSelector.value)]}'s PAYE (Actual)`,
      value: calculatorResult.paye.monthlyActual,
      isCurrency: true,
    };
    let netSalaryAverageData: IResultData = {
      title: "Monthly Net Salary (Average)",
      value: calculatorResult.netSalaryAverage.toCurrency(),
      isCurrency: true,
    };
    let netSalaryActualData: IResultData = {
      title: `${Months[Number(monthSelector.value)]}'s Net Salary (Actual)`,
      value: calculatorResult.netSalaryActual.toCurrency(),
      isCurrency: true,
    };

    setResultData([
      weekData,
      salaryData,
      nisData,
      hsData,
      payeAverageData,
      netSalaryAverageData,
      payeActualData,
      netSalaryActualData,
    ]);
  }, [calculatorResult]);

  function getMondaysClickHandler(): void {
    let yearSelector = document.getElementById(
      "year-selector"
    ) as HTMLSelectElement;
    let monthSelector = document.getElementById(
      "month-selector"
    ) as HTMLSelectElement;

    setCalculatorInputs({
      ...calculatorInputs,
      weeks: GetMondays(
        Number(yearSelector.value),
        Number(monthSelector.value)
      ),
    });
  }

  function onChangeWeeks(e: ChangeEvent<HTMLInputElement>): void {
    if (!InputValidators[InputValidatorType.PositiveInteger](e)) {
      e.preventDefault();
      return;
    }

    let weeks = Number(e.target.value);
    console.log(weeks);
    //check if weeks is 4 or 5
    if ([0, 4, 5].indexOf(weeks) === -1) {
      e.preventDefault();
      return;
    }

    setCalculatorInputs({
      ...calculatorInputs,
      weeks,
    });
  }

  function onChangeMonthlySalary(e: ChangeEvent<HTMLInputElement>): void {
    if (!InputValidators[InputValidatorType.PositiveNumber](e)) {
      e.preventDefault();
      return;
    }

    setCalculatorInputs({
      ...calculatorInputs,
      monthlySalary: e.target.value,
    });
  }

  function onChangeMonthlyOvertime(e: ChangeEvent<HTMLInputElement>): void {
    if (!InputValidators[InputValidatorType.PositiveNumber](e)) {
      e.preventDefault();
      return;
    }

    setCalculatorInputs({
      ...calculatorInputs,
      monthlyOvertime: e.target.value,
    });
  }

  function onChangeMonthlyAllowances(e: ChangeEvent<HTMLInputElement>): void {
    if (!InputValidators[InputValidatorType.PositiveNumber](e)) {
      e.preventDefault();
      return;
    }

    setCalculatorInputs({
      ...calculatorInputs,
      monthlyAllowances: e.target.value,
    });
  }

  function calculate(): void {
    const totalEmoluments =
      Number(calculatorInputs.monthlySalary) +
      Number(calculatorInputs.monthlyAllowances) +
      Number(calculatorInputs.monthlyOvertime);

    //calculate health surcharge
    let hsRate = GetHealthSurcharge(totalEmoluments);
    let monthlyHS = hsRate * calculatorInputs.weeks;

    //calculate nis
    let nisRate = GetNationalInsuranceRate(totalEmoluments);
    let monthlyNIS =
      nisRate !== null
        ? nisRate.employeeWeeklyContribution * calculatorInputs.weeks
        : 0;

    //calculate paye
    let monthlyPAYE = GetIncomeTax(
      totalEmoluments,
      nisRate?.employeeWeeklyContribution || 0,
      calculatorInputs.weeks
    );

    //set result
    setCalculatorResult({
      ...calculatorResult,
      weeks: calculatorInputs.weeks,
      grossSalary: totalEmoluments.toCurrency(),
      hs: monthlyHS.toCurrency(),
      nis: monthlyNIS.toCurrency(),
      paye: monthlyPAYE,
      netSalaryAverage:
        totalEmoluments -
        (monthlyHS.toCurrency() +
          monthlyNIS.toCurrency() +
          monthlyPAYE.monthlyAverage),
      netSalaryActual:
        totalEmoluments -
        (monthlyHS.toCurrency() +
          monthlyNIS.toCurrency() +
          monthlyPAYE.monthlyActual),
    });
  }

  return (
    <div className="App">
      <Header />
      <Body>
        <FormCard>
          <div className="form-control">
            <div className="row">
              <MonthSelector />
              <YearSelector
                from={new Date().getFullYear() - Settings.dateRangeLimit}
                to={new Date().getFullYear()}
              />
            </div>
            <button onClick={() => getMondaysClickHandler()}>Get Weeks</button>
          </div>
          <TextInput
            label="Weeks"
            className="digit"
            value={calculatorInputs.weeks}
            onChangeHandler={onChangeWeeks}
          />
          <TextInput
            label="Monthly Salary"
            className="digit"
            placeholder="0"
            value={FormatZeroValue(calculatorInputs.monthlySalary)}
            onChangeHandler={onChangeMonthlySalary}
          />
          <TextInput
            label="Monthly Allowances"
            className="digit"
            placeholder="0"
            value={FormatZeroValue(calculatorInputs.monthlyAllowances)}
            onChangeHandler={onChangeMonthlyAllowances}
          />
          <TextInput
            label="Monthly Overtime"
            className="digit"
            placeholder="0"
            type={TextInputType.Currency}
            value={FormatZeroValue(calculatorInputs.monthlyOvertime)}
            onChangeHandler={onChangeMonthlyOvertime}
          />
          <button id="btn-calculate" type="button" onClick={() => calculate()}>
            Calculate
          </button>
        </FormCard>
        <ResultCard>
          <div className="result-container">{BuildResult(resultData)}</div>
        </ResultCard>
      </Body>
      <Footer />
    </div>
  );
}

const BuildResult = (resultData: IResultData[]): JSX.Element[] | undefined => {
  if (resultData !== null) {
    return resultData.map(({ value, title, isCurrency }, index) => (
      <div key={index} className="result-row">
        <div className="title">{title}</div>
        <div className="value">
          {isCurrency ? value.formatCurrency() : value}
        </div>
      </div>
    ));
  }
};

export default App;
