import * as _ from 'lodash';
import * as dataHelpers from './utils/dataHelper';
import Employee from './utils/employeeCreator';

const employees = [
    new Employee('1'),
    new Employee('2'),
    new Employee('3'),
    new Employee('4'),
    new Employee('5'),
    new Employee('6')
];

class HomeController {

    constructor($scope, fileSaver) {
        var vm = this;
        vm.months = dataHelpers.months;
        vm.daysOfWeek = dataHelpers.daysOfWeek;
        vm.numberOfDays = [];
        vm.print = true;
        vm.printStyle = {'border': '0.1pt  solid #808080', 'padding': '0px', 'margin': '0px', 'text-align': 'middle'};
        vm.employees = employees;
        vm.selected = vm.months[new Date().getMonth()];
        vm.hoursPerMonth = 160;
        vm.year = new Date().getFullYear();
        vm.add = add;
        vm.countSum = countSum;
        vm.exportExcel = exportExcel;
        vm.printFile = printFile;
        vm.changeMonth = changeMonth;
        vm.changeYear = changeYear;
        vm.setRowStyle = setRowStyle;
        vm.setHoliday = setHoliday;

        setDateMap();

        function setHoliday(index) {
            vm.numberOfDays[index].isHoliday = true;
            vm.hoursPerMonth = 160 - dataHelpers.countHolidays(vm.numberOfDays)*8;
        }

        function setRowStyle(i) {
            if (i.isHoliday)
                return {'background-color': 'red'};
            if (dataHelpers.isWeekend(i.day))
                return {'background-color': '#D3D3D3'};
        }

        function changeMonth(name) {
            vm.selected = name;
            cleanUp();
            setDateMap();
        }

        function add() {
            vm.employees.push(new Employee(''));
        }

        function daysInMonth(month, year) {
            return new Date(year, month, 0).getDate();
        }

        function exportExcel() {
            var tab = document.getElementById('toPrint').innerHTML;
            var blob = new Blob(['\uFEFF' + tab], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=windows-1252s'
            });
            fileSaver.saveAs(blob, 'report.xls');
        }

        function printFile() {
            var html = '<html>';
            html += document.getElementById('toPrint').innerHTML;
            html += '</html>';
            var printWin = window.open('', '', 'left=0,top=0,width=1,height=1,toolbar=0,scrollbars=0,status  =0');
            printWin.document.write(html);
            printWin.document.close();
            printWin.focus();
            printWin.print();
            printWin.close();
        }

        function countSum(emp, index) {
            const to = emp.to && emp.to[index] ? emp.to[index] : 0;
            const from = emp.from && emp.from[index] ? emp.from[index] : 0;
            emp.sum[index] = to - from;
            emp.totalSum = emp.sum.reduce((a, b)=> {
                return a + b;
            })
        }

        function setDateMap() {
            const month = vm.months.indexOf(vm.selected);
            vm.numberOfDays = [];
            const daysNumber = daysInMonth(month + 1, vm.year);
            const firstDay = new Date(vm.year, month).getDay();

            for (let i = 0; i < daysNumber; i++) {
                vm.numberOfDays.push({day: `${vm.daysOfWeek[(firstDay + i) % 7]}`, isHoliday: false});
            }
        }

        function changeYear() {
            cleanUp();
            setDateMap();
        }

        function cleanUp() {
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

