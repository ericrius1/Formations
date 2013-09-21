window.angular.module('ngff.directives.formations', [])
  .directive('formations',
    function() {

      return {
        restrict: 'E',
        templateUrl: 'views/symbols/list.html',
      }
    })