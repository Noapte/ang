import template from './about.html';
import controller from './about.controller';
import './about.scss';

let aboutComponent = {
  restrict: 'E',
  bindings: {
    ble: '=',
    printable: '='
  },
  template,
  controller: ['$scope', controller]
};

export default aboutComponent;
