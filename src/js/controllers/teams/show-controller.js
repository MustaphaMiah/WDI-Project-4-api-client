angular
.module('footie-app')
.controller('TeamsShowCtrl', TeamsShowCtrl);

TeamsShowCtrl.$inject = ['Team', '$stateParams'];
function TeamsShowCtrl(Team, $stateParams){
  const vm = this;
  vm.user = Team.get({id: $stateParams.id});
}
