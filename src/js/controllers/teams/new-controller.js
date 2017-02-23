angular
.module('footie-app')
.controller('TeamsNewCtrl', teamsNewCtrl);

teamsNewCtrl.$inject = ['Team', '$state'];

function teamsNewCtrl(Team, $state) {
  const vm = this;
  vm.submitTeam = () => {
    Team
    .save({team: vm.newTeam})
    .$promise
    .then(data => {
      console.log(data);
      $state.go('teamsIndex');
    });
  };
}
