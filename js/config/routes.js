(function () {
  angular.module('landscaping')
  .config(MainRouter);

  MainRouter.$inject = ["$stateProvider", "$urlRouterProvider"];

  function MainRouter ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state ('home', {
      url: '/',
      templateUrl: 'js/home/home.html'
    })
    .state ('About', {
      url: '/About',
      templateUrl: 'js/about/about.html'
    })
    .state ('Work', {
      url: '/Work',
      templateUrl: 'js/work/work.html'
    })
    .state ('Service', {
      url: '/Service',
      templateUrl: 'js/service/service.html'
    })
    .state ('Contact', {
      url: '/Contact',
      templateUrl: 'js/contact/contact.html'
    })
    $urlRouterProvider.otherwise('/');
  }
})()
