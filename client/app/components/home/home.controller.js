import * as _ from 'lodash';

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

  constructor(fileSaver) {
    var vm = this;
    vm.numberOfDays = [];
    vm.countSum = countSum;
    vm.employees = employees;
    vm.months = months;
    vm.daysOfWeek = daysOfWeek;
    vm.selected = vm.months[new Date().getMonth()];
    vm.hoursPerMonth = 160;
    vm.year = new Date().getFullYear();
    vm.add = add;
    vm.exportFile = exportFile;
    setDateMap();
    vm.changeMonth = changeMonth;
    vm.changeYear = changeYear;
    function changeMonth(name) {
      vm.selected = name;
      cleanUp();
      setDateMap();
    }

    function add(){
      vm.employees.push(new createEmployee(''));
    }
    function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }
    function exportFile(){
      var tab = document.getElementById('ble').innerHTML.replace(/<input ng-model=".*" class.*>/g, 'gggg</td>');

console.log(tab)
      var blob = new Blob(["\uFEFF" + tab], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=windows-1252s"
      });
      fileSaver.saveAs(blob, "Report.xls");
       //     const csvBlob = new Blob(['dd;ddd;ddddcccccccccccccccccccccc; bbbbbbb \n dddd;cos'], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
   //   fileSaver.saveAs(csvBlob, 'k.csv');

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

