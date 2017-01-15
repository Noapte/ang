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
    vm.selected = vm.months[new Date().getMonth()];
    vm.hoursPerMonth = 160;
    vm.year = new Date().getFullYear();
    setDateMap();
    vm.changeMonth = changeMonth;
    vm.changeYear = changeYear;
    function changeMonth(name) {
      vm.selected = name;
      cleanUp();
      setDateMap();
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
    function setDateMap(){

      const month = months.indexOf(vm.selected);
      vm.numberOfDays = [];
      const daysNumber = daysInMonth(month +1, vm.year);
      const firstDay = new Date(vm.year, month).getDay();

      for (let i = 0; i < daysNumber; i++) {
        vm.numberOfDays.push(`${vm.daysOfWeek[(firstDay + i) % 7]}`);
      }
    }

    function changeYear() {
      cleanUp();
      setDateMap();
    }

    function cleanUp(){
      _.each(vm.employees, employee => {
        employee.from = null;
        employee.to = null;
        employee.sum = [];
        employee.totalSum = 0;
      })
    }

  }
}

export default HomeController;

