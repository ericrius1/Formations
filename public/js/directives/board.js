window.angular.module('ngff.directives.board', [])
  .directive('board', ['socket',
    function(socket) {


      var linker = function(scope, elem, attrs) {
        var nodeDragging = false;
        var mouseOnNode = false;
 

        scope.svg = d3.select(elem[0]).append("svg")
          .attr('width', elem.parent().width())
          .attr('height', elem.parent().height())
          .attr('class', 'boardBackground')
          .append('g')
          .call(d3.behavior.zoom().on('zoom', zoom))
          .append('g')

        scope.svg.append("rect")
          .attr("class", "overlay")
          .attr("width", elem.parent().width())
          .attr("height", elem.parent().height());



        scope.$on('addFormation', function(event, formation) {
          var group = formation.select('g');
          scope.svg.node().appendChild(group.node())
          var pieces = group.selectAll('circle')
            .call(d3.behavior.drag().on('drag', move));


        })

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
        function zoom() {
          console.log('zoom')
          scope.svg
          .attr("transform","translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
        }
      }

      return {
        restrict: 'E',
        link: linker
      }

    }
  ])