window.angular.module('ngff.services.symbols', [])
  .factory('Symbols', ['$resource', 
    function($resource){
      return $resource(
        'symbols/:symbolId', 
        {
          symbolId:'@_id'
        }, 
        {
          update: {method: 'PUT'}
        }
      )
    }]);