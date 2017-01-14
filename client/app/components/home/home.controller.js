import * as flightUtils from './flightUtils';
const names = [{
  'Name': 'Alfredyyyys Futterkiste',
  'City': 'Berlin',
  'Country': 'Germany'
}, {
  'Name': 'Ana Trujillo Emparedados y helados',
  'City': 'México D.F.',
  'Country': 'Mexico'
}, {'Name': 'Antonio Moreno Taquería', 'City': 'México D.F.', 'Country': 'Mexico'}, {
  'Name': 'Around the Horn',
  'City': 'London',
  'Country': 'UK'
}, {'Name': 'Bs Beverages', 'City': 'London', 'Country': 'UK'}, {
  'Name': 'Berglunds snabbköp',
  'City': 'Luleå',
  'Country': 'Sweden'
}, {'Name': 'Blauer See Delikatessen', 'City': 'Mannheim', 'Country': 'Germany'}, {
  'Name': 'Blondel père et fils',
  'City': 'Strasbourg',
  'Country': 'France'
}, {'Name': 'Bólido Comidas preparadas', 'City': 'Madrid', 'Country': 'Spain'}, {
  'Name': 'Bon app',
  'City': 'Marseille',
  'Country': 'France'
}, {'Name': 'Bottom-Dollar Marketse', 'City': 'Tsawassen', 'Country': 'Canada'}, {
  'Name': 'Cactusrfffff Comidas para llevar',
  'City': 'Buenos Aires',
  'Country': 'Argentina'
}, {'Name': 'Centro comercial Moctezuma', 'City': 'México D.F.', 'Country': 'Mexico'}, {
  'Name': 'Chop-suey Chinese',
  'City': 'Bern',
  'Country': 'Switzerland'
}, {'Name': 'Comércio Mineiro', 'City': 'São Paulo', 'Country': 'Brazil'}];

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
    'grudzień'];

const daysOfWeek =
['poniedziałek',
    'wtorek',
    'środa',
    'czwartek',
    'piątek',
    'sobota',
    'niedziela'];

class HomeController {

  constructor() {
    var vm = this;
    vm.names = names;
    vm.months = months;
    vm.daysOfWeek = daysOfWeek;
vm.selected = 'wybierz miesiąc';
    vm.sel2 = true;
    vm.ble = ble;
    function ble(name) {
      vm.selected = name;
      vm.sel2 = false;
      console.log(name)
    }







    // vm.startDate = null;
    // vm.endDate = null;
    // vm.logs = ['No result'];
    // const airports = flightUtils.possibleDestinations;
    // vm.find = find;
    // vm.selectStart = {
    //   model: null,
    //   availableOptions: airports
    // };
    // vm.selectEnd = {
    //   model: null,
    //   availableOptions: airports
    // };
    //
    // function find() {
    //   const uri = flightUtils.createQuestionUrl(vm.selectStart.model, vm.selectEnd.model, vm.startDate, vm.endDate);
    //   if (uri)
    //     $http.get(uri)
    //       .then(function (resp) {
    //         vm.logs = flightUtils.foundFlights(resp);
    //       });
    //   else
    //     vm.logs = ['Incorrect data, select correct airport.'];
    // }
  }
}

export default HomeController;
