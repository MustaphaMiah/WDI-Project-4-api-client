angular
.module('footie-app')
.controller('TeamsNewCtrl', teamsNewCtrl);

teamsNewCtrl.$inject = ['Team', '$state'];

function teamsNewCtrl(Team, $state) {
  const vm = this;
  vm.submit = () => {
    Team
    .save({team: vm.team})
    .$promise
    .then(data => {
      $state.go('teamsIndex');
    });
  };
}
