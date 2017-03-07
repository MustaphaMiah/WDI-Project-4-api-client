angular
  .module('footie-app')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    User
      .register({ user: vm.user }).$promise
      .then(data => {
        CurrentUserService.getUser();
        $state.go('usersShow', {id: data.user.id});
      }, err => {
        console.log(err);
      });
  };
}
