export default function GetMondays(year: number, month: number): number {
  var currentDate = new Date(year, month, 1);
  var firstDayOfMonth = currentDate.firstDayOfMonth();
  var lastDayOfMonth = currentDate.lastDayOfMonth();

  var activeDay = firstDayOfMonth;
  var mondays = 0;
  while (activeDay.getTime() <= lastDayOfMonth.getTime()) {
    if (activeDay.getDay() === 1) mondays++;

    activeDay.setDate(activeDay.getDate() + 1);
  }

  return mondays;
}
