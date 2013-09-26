window.angular.module('ngff.directives.board', [])
  .directive('board', ['socket',
    function(socket) {


      var linker = function(scope, elem, attrs) {
        var mouseOnNode = false;
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
              return "translate(" + [d3.event.x, d3.event.y] + ")"
            })
          });

        scope.svg = d3.select(elem[0]).append("svg")
          .attr('width', elem.parent().width())
          .attr('height', elem.parent().height())
          .attr('class', 'boardBackground')
          .call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoom))
          .append("g");

        scope.svg.append("rect")
          .attr("class", "overlay")
          .attr("width", elem.parent().width())
          .attr("height", elem.parent().height());



        scope.$on('addFormation', function(event, formation) {
          var group = formation.select('g');
          scope.svg.node().appendChild(group.node())
          drag1.call(group);
          group.on('mousedown', function() {
            mouseOnNode = true;
          })
          group.on('mouseup', function() {
            mouseOnNode = false;
          })

        })

        function zoom() {
          if(mouseOnNode)return
          scope.svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");

        }

      }


      return {
        restrict: 'E',
        link: linker
      }

    }
  ])