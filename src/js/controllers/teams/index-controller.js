angular
  .module('footie-app')
  .controller('TeamsIndexCtrl', TeamsIndexCtrl);

TeamsIndexCtrl.$inject = ['Team', 'CurrentUserService'];
function TeamsIndexCtrl(Team, CurrentUserService){
  const vm = this;

  Team
  .query()
  .$promise
  .then(data => {
    // console.log(CurrentUserService);
    // console.log(CurrentUserService.currentUser);
    // console.log(CurrentUserService.getUser());
    // var id = CurrentUserService.currentUser;
    vm.teams = data;
    // for (var i = 0; i < vm.teams.length; i++) {
    //   for (var j = 0; j < vm.teams[i].requests.length; j++) {
    //     if (vm.teams[i].requests[j].id_of_requester === id){
    //       vm.teams.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }
    console.log(vm.teams);
  });
}
