/* eslint-disable no-extend-native */
declare global {
  interface Date {
    firstDayOfMonth(): Date;
    lastDayOfMonth(): Date;
  }
}

Date.prototype.firstDayOfMonth = function () {
  var currentYear = this.getFullYear();
  var currentMonth = this.getMonth();

  return new Date(currentYear, currentMonth, 1);
};

Date.prototype.lastDayOfMonth = function () {
  var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var currentYear = this.getFullYear();
  var currentMonth = this.getMonth();

  if (currentYear % 4 === 0) daysInMonths[1] = 29;

  return new Date(currentYear, currentMonth, daysInMonths[currentMonth]);
};

export {};
