export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthSelector() {
  return buildSelectionOptions();
}

function buildSelectionOptions() {
  return (
    <select id="month-selector" defaultValue={new Date().getMonth()}>
      {Months.map((month, index) => (
        <option key={month} value={index}>
          {month}
        </option>
      ))}
    </select>
  );
}
