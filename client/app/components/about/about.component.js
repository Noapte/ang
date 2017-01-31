import template from './about.html';
import controller from './about.controller';
import './about.scss';

let aboutComponent = {
  restrict: 'A',
  bindings: {
    ble: '=',
    printable: '=',
    styles: '='
  },
  template,
  controller: ['$scope', controller]
};

export default aboutComponent;
