window.angular.module('ngff.controllers.symbols', [])
  .controller('SymbolsController', ['$scope', 'socket', '$location', 'Symbols', '$routeParams',
    function($scope, socket, $location, Symbols, $routeParams) {
      $scope.saveSymbol = function(){
        var svgxml = (new XMLSerializer()).serializeToString($scope.svg.node());
        var symbol = new Symbols({
          svgxml: svgxml
        });

        symbol.$save( function (response){
          $location.path("symbols/" + response._id);
        });
      }

      $scope.findOne = function() {
        Symbols.get({symbolId : $routeParams.symbolId}, function(symbol){
          // var parser = new DOMParser();
          // $scope.svg = parser.parseFromString(symbol.svgxml, "image/svg+xml");
          $scope.symbol = symbol;
        })
      }

       $scope.find = function (query) {
        Symbols.query(query, function (symbols) {
          $scope.symbols = symbols;
        });
      };

    }
  ]);