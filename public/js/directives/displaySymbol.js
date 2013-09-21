window.angular.module('ngff.directives.displaysymbol', [])
  .directive('displaySymbol',
    function() {

      var w = 300;
      var h = 300;

      return {
        restrict: 'E',
        scope: {
          svg: '=svg'
        },
        link: function(scope, ele, attrs) {
          scope.ele = ele;
          scope.$watch('svg', function(newSVG, oldSVG) {
            scope.svg = newSVG;
            scope.render();
          })

          scope.render = function() {
            scope.ele[0].innerHTML = scope.svg
            var formation = d3.select(scope.ele[0]).selectAll('svg');
            formation.on('mousedown', function(){
              scope.$emit('addFormation', d3.select(this));
            })
            

          }



        }
      }
    })