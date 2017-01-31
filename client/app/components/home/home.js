import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngFileSaver from 'angular-file-saver';
import About from './../about/about';

import homeComponent from './home.component';
require('angular-ui-bootstrap');
let homeModule = angular.module('home', [
  uiRouter,
  'ui.bootstrap',
  ngFileSaver,
    About
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

.component('home', homeComponent, ngFileSaver)

.name;

export default homeModule;
