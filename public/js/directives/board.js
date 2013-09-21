window.angular.module('ngff.directives.board', [])
  .directive('board', ['socket',
    function(socket) {


      var linker = function(scope, elem, attrs) {


        scope.svg = d3.select(elem[0]).append("svg")
          .attr('width', elem.parent().width())
          .attr('height', elem.parent().height())
          .style('background', 'blue')

        scope.$on('addFormation', function(event, formation){
          scope.svg.node().appendChild(formation.node())
        })

      }


      return {
        restrict: 'E',
        link: linker
      }

    }
  ])