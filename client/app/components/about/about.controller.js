class AboutController {
    constructor($scope) {

        var vm = this;
        $scope.$watch('$ctrl.printable', (newValue)=> {
            if (newValue == true){
                var html="<html>";
                html+= document.getElementById('toPrint').innerHTML;

                html+="</html>";

                var printWin = window.open('','','left=0,top=0,width=1,height=1,toolbar=0,scrollbars=0,status  =0');
                printWin.document.write(html);
                printWin.document.close();
                printWin.focus();
                printWin.print();
                printWin.close();
                vm.printable = false;

            }

        })
        vm.cos = cos;
        function cos() {
            console.log(vm.ble)
        }
    }
}

export default AboutController;
