angular
.module('footie-app')
.controller('TeamsShowCtrl', TeamsShowCtrl);

TeamsShowCtrl.$inject = ['Team', '$stateParams', 'Request'];
function TeamsShowCtrl(Team, $stateParams, Request){
  console.log('this is loaded');
  const vm = this;

  vm.hasSubmitted = false;
  vm.team = Team.get({id: $stateParams.id});
  console.log(vm.team);

  vm.submitRequest = () => {
    const request = {
      team_id: $stateParams.id
    };
    Request
      .save(request)
      .$promise
      .then(data => {
        console.log('success', data);
        vm.team.requests.push(data);
        vm.hasSubmitted = true;
        vm.team = Team.get({id: $stateParams.id});
      });
  };

}
