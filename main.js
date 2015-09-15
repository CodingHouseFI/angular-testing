import angular from "angular";

let app = angular.module("planetLister", []);

app.controller("planetCtrl", function($scope, $http) {
  var planets = [];
  var p = 0;
  while (p < 61) {
    p++;
    $http.get("http://swapi.co/api/planets/"+ p +"/")
    .success( data => {
      $scope.planets = data;
      $scope.population = data.population;

      console.log('resArr is: '+resArr);

      function residents() {
        if (data.residents) {
          $scope.residents = resArr.match(/(\d)+/g);
          console.log("It has a resident total: "+ $scope.residents);
        }
      }

    });
  } //console.log( "outside of function" + planets);
  for (pl in planets) {
    $scope.planet = pl;

    $("ul").append("<li><a href= # data-toggle= 'popover' title='Popover Header' data-content='Some content inside the popover'>"+ pl.name+ "</li>");
  }
});