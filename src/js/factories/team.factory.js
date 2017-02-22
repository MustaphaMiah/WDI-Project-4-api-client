angular
  .module('footie-app')
  .factory('Team', teamFactory);

teamFactory.$inject = ['API', '$resource'];
function teamFactory(API, $resource){
  return $resource(`${API}/teams/:id`, { id: '@_id'}, {

  });
}
