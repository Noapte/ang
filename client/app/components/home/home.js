import angular from 'angular';
import uiRouter from 'angular-ui-router';

import homeComponent from './home.component';
require('angular-ui-bootstrap');
let homeModule = angular.module('home', [
  uiRouter,
  'ui.bootstrap'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
