window.angular.module('ngff.directives.board', [])
  .directive('board', ['socket',
    function(socket) {


      var linker = function(scope, elem, attrs) {
         
         var drag1 = d3.behavior.drag()
          .origin(function() {
            var t = d3.select(this);
            return {
              x: t.attr("x") + d3.transform(t.attr("transform")).translate[0],
              y: t.attr("y") + d3.transform(t.attr("transform")).translate[1]
            };
          })
          .on("drag", function(d, i) {
            d3.select(this).attr("transform", function(d, i) {
              debugger;
              return "translate(" + [d3.event.x, d3.event.y] + ")"
            })
          });

        scope.svg = d3.select(elem[0]).append("svg")
          .attr('width', elem.parent().width())
          .attr('height', elem.parent().height())
          .style('background', 'blue')

        scope.$on('addFormation', function(event, formation) {
          scope.svg.node().appendChild(formation.node())
          drag1.call( formation.select('g'));

        })




      }


      return {
        restrict: 'E',
        link: linker
      }

    }
  ])