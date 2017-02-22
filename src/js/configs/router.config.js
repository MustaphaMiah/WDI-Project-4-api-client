angular
.module('footie-app')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
.state('home', {
  url: '/',
  templateUrl: '/js/views/home.html'
})
.state('register', {
  url: '/register',
  templateUrl: '/js/views/register.html',
  controller: 'RegisterCtrl',
  controllerAs: 'register'
})
.state('login', {
  url: '/login',
  templateUrl: '/js/views/login.html',
  controller: 'LoginCtrl',
  controllerAs: 'login'
})
.state('usersIndex', {
  url: '/users',
  templateUrl: '/js/views/users/index.html',
  controller: 'UsersIndexCtrl',
  controllerAs: 'usersIndex'
})
.state('usersShow', {
  url: '/users/:id',
  templateUrl: '/js/views/users/show.html',
  controller: 'UsersShowCtrl',
  controllerAs: 'usersShow'
})
.state('teamsIndex', {
  url: '/teams',
  templateUrl: '/js/views/teams/index.html',
  controller: 'TeamsIndexCtrl',
  controllerAs: 'teamsIndex'
})
.state('teamShow', {
  url: '/js/views/teams/show.html',
  controller: 'TeamShowCtrl',
  controllerAs: 'teamsShow'
})
.state('teamNew', {
  url: '/js/views/teams/new.html',
  controller: 'TeamNewCtrl',
  controllerAs: 'teamsNew'
});

  $urlRouterProvider.otherwise('/');
}
