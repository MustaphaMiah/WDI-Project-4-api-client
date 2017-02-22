angular
  .module('footie-app')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Team'];
function UsersShowCtrl(User, $stateParams, Team){
  const vm = this;
  User
    .get($stateParams)
    .$promise
    .then(data => {
      console.log('user', data);
      vm.user = data;
    });

  console.log('teams:', Team.query());
}
