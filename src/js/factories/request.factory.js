angular
  .module('footie-app')
  .factory('Request', requestFactory);

requestFactory.$inject = ['API', '$resource'];
function requestFactory(API, $resource){
  return $resource(`${API}/requests/:id`, { id: '@_id'}, {

  });
}
