import IYearSelector from "../interfaces/IYearSelector";

export default function YearSelector({ from, to }: IYearSelector) {
  return buildSelectionOptions(from, to);
}

function buildSelectionOptions(from: number, to: number) {
  let options: Array<JSX.Element> = [];
  for (let i = from; i <= to; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <select id="year-selector" defaultValue={new Date().getFullYear()}>
      {options}
    </select>
  );
}
