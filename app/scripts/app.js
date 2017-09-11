'use strict';

angular
  .module('sportsBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularMoment',
    'ngProgress'
  ])
  .config(function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('matches', {
        url: "/matches/:leagueId/:leagueName",
        templateUrl: 'views/matches.html',
        controller: 'MatchesCtrl',
        controllerAs: 'matches',
      });
    $locationProvider.hashPrefix('');
  });
