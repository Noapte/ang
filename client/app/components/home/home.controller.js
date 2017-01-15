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
  {number: 1, from: {}, to: {} },

  {number: 2 ,from: {}, to: {}},
  {number: 3 ,from: {}, to: {}},
  {number: 4 ,from: {}, to: {}},
  {number: 5 ,from: {}, to: {} }
];




class HomeController {

  constructor() {

    var vm = this;
    vm.numberOfDays = [];

vm.employees = employees;
    vm.months = months;
    vm.daysOfWeek = daysOfWeek;
    vm.selected = 'wybierz miesiąc';
    vm.defaultSelected = true;
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

