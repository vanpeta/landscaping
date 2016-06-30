(function () {
  angular.module('landscaping')
  .config(MainRouter);

  MainRouter.$inject = ["$stateProvider", "$urlRouterProvider"];

  function MainRouter ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state ('home', {
      url: '/',
      templateUrl: 'index.html'
    })
    .state ('About', {
      url: '/About',
      templateUrl: 'templates/About.html'
    })
    .state ('Work', {
      url: '/Work',
      templateUrl: 'templates/Work.html'
    })
    .state ('Service', {
      url: '/Service',
      templateUrl: 'templates/Service.html'
    })
    .state ('Contact', {
      url: '/Contact',
      templateUrl: 'templates/Contact.html'
    })
    .state ('hiring_employer', {
      url: '/hiring_employer',
      templateUrl: 'templates/hiring_employer.html'
    })
    .state ('prospect_client', {
      url: '/prospect_client',
      templateUrl: 'templates/prospect_client.html'
    })
    $urlRouterProvider.otherwise('/');
  }
})()
