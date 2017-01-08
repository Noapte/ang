import * as flightUtils from './flightUtils';

class HomeController {
    constructor($http) {
        var vm = this;
        vm.startDate = null;
        vm.endDate = null;
        vm.logs = ['No result'];
        const airports = flightUtils.possibleDestinations;
        vm.find = find;
        vm.selectStart = {
            model: null,
            availableOptions: airports
        };
        vm.selectEnd = {
            model: null,
            availableOptions: airports
        };

        function find() {
            const uri = flightUtils.createQuestionUrl(vm.selectStart.model, vm.selectEnd.model, vm.startDate, vm.endDate);
            if (uri)
                $http.get(uri)
                    .then(function (resp) {
                        vm.logs = flightUtils.foundFlights(resp);
                    });
            else
                vm.logs = ['Incorrect data, select correct airport.'];
        }
    }
}

export default HomeController;
