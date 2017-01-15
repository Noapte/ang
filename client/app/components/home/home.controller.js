import * as flightUtils from './flightUtils';

const months =
  ['styczeń',
    'luty',
    'marzec',
    'kwiecień',
    'maj',
    'czerwiec',
    'lipiec',
    'sierpień',
    'wrzesień',
    'październik',
    'listopad',
    'grudzień'];

const daysOfWeek =
  ['niedziela',
    'poniedziałek',
    'wtorek',
    'środa',
    'czwartek',
    'piątek',
    'sobota'];

const employees = [
  new createEmployee('1'),
  new createEmployee('2'),
  new createEmployee('3'),
  new createEmployee('4'),
  new createEmployee('5'),
  new createEmployee('6')
];


function createEmployee(id) {
  this.id = id;
  this.from = null;
  this.to = null;
  this.sum = [];
  this.totalSum = 0;
}
class HomeController {

  constructor() {
    var vm = this;
    vm.numberOfDays = [];
    vm.countSum = countSum;
    vm.employees = employees;
    vm.months = months;
    vm.daysOfWeek = daysOfWeek;
    vm.selected = 'wybierz miesiąc';
    vm.defaultSelected = true;
    vm.hoursPerMonth = 160;
    vm.year = new Date().getFullYear();
    vm.ble = ble;
    vm.changeYear = changeYear;
    function ble(name) {
      vm.selected = name;
      vm.defaultSelected = false;
      const b = months.indexOf(vm.selected) + 1;
      vm.numberOfDays = [];
      const daysNumber = daysInMonth(b, vm.year);
      var months2 = b - 1;
      const firstDay = new Date(vm.year, months2).getDay();

      for (let i = 0; i < daysNumber; i++) {
        vm.numberOfDays.push(`${vm.daysOfWeek[(firstDay + i) % 7]}`);
      }
    }

    function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }

    function countSum(emp, index) {
      const to = emp.to && emp.to[index] ? emp.to[index] : 0;
      const from = emp.from && emp.from[index] ? emp.from[index] : 0;
      emp.sum[index] = to - from;
      emp.totalSum = emp.sum.reduce((a, b)=> {

        return a + b;
      })
    }

    function changeYear() {
      const b = months.indexOf(vm.selected) + 1;
      vm.numberOfDays = [];
      const daysNumber = daysInMonth(b, vm.year);
      var months2 = b - 1;
      const firstDay = new Date(vm.year, months2).getDay();
      for (let i = 0; i < daysNumber; i++) {
        vm.numberOfDays.push(`${vm.daysOfWeek[(firstDay + i) % 7]}`);
      }
    }

  }
}

export default HomeController;

