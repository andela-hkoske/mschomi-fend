(function() {
  'use strict';
  angular.module('mschomi.controllers', []);
  angular.module('mschomi.services', []);
  angular.module('mschomi.filters', []);
  angular.module('mschomi.directives', []);

  //Require Services
  // require('./services/utils');


  // Require Controllers
  // require('./controllers/footer');

  window.app = angular.module('mschomi', [
    'mschomi.controllers',
    'mschomi.services',
    'mschomi.filters',
    'mschomi.directives',
    'ui.router',
    'ngResource',
    'ngMaterial'
  ]);

  window.app.run(['$rootScope', '$location',
    function($rootScope, $location) {
      $rootScope.menu = [{
        name: 'Home',
        state: 'home'
      }, {
        name: 'Students',
        state: 'signup'
      }, {
        name: 'Sponsors',
        state: 'signup'
      }];
    }
  ]);

  window.app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/404');

      // Now set up the states
      $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange')
        .accentPalette('light-blue');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/sponsor-profile.html'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'views/signup.html'
        })
        .state('404', {
          url: '/404',
          templateUrl: 'views/404.html'
        })
        .state('userProfile', {
          url: '/profile',
          templateUrl: 'views/user-profile.html',
        });

      $locationProvider.html5Mode(true);
    }
  ]);

})();
