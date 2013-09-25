window.angular.module('ngff.directives.createsymbol', [])
  .directive('createSymbol', ['socket',
    function(socket) {
      var w = 150;
      var h = 150;


      var linker = function(scope, elem, attrs) {

        scope.svg = d3.select(elem[0]).append("svg")
          .attr("width", w)
          .attr("height", h)
          .style('background', 'blue')
          .on('mousedown', function() {
          particle(this);
        })
        var group = scope.svg.append('g')
        .on('mousedown', function() {
          particle(this);
        })


        function particle(context) {
          console.log(scope.color)
          var m = d3.mouse(context);
          var node = group.append("circle")
            .attr("cx", m[0])
            .attr("cy", m[1])
            .attr("r", 5)
            .style('fill', scope.color)
            .style("stroke-opacity", 1)
            .on('mousedown', function() {
              d3.event.stopPropagation();
              node.style('fill', 'yellow')
            })
            .on('mouseup', function() {
              node.style('fill', scope.color)
            })
            .call(d3.behavior.drag().on('drag', move));
        }

        function move() {
          var dragTarget = d3.select(this);
          dragTarget
            .attr('cx', function() {
              return d3.event.dx + parseInt(dragTarget.attr('cx'))
            })
            .attr('cy', function() {
              return d3.event.dy + parseInt(dragTarget.attr('cy'))
            })

        }
      }


      return {
        restrict: 'E',
        link: linker
      }

    }
  ])