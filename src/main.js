import angular from "angular";

let app = angular.module("planetLister", []);

// app.run(function(planetsService) {
//   console.log('run!!!');
// });

var count = 0;

app.controller("planetCtrl", function($scope, planetFactory) {
  $scope.planets = [];


  var planet1 = new planetFactory('Earth', ['Moon']);
  planet1.addMoon('newMoon');

  console.log(planet1);
  console.log(planet1.moons);
  // console.log(Object.keys(planet1));

});

app.factory('planetFactory', function($http) {

  var planet = function(name, moons){
    this.name = name;
    this.moons = moons;
  };
  planet.prototype.addMoon = function(moon) {
    this.moons.push(moon);
  };

  return planet;
});


app.service("planetsService", function($http){
  this.planets = [];
  this.getPlanets = (cb) => {
    $http.get("http://swapi.co/api/planets/")
    .success( data => {
      this.planets = data.results;
      cb();
    })
    .error( error => {
      cb(error);
      console.error(error);
    });
  };
});

// app.factory('planetsFactory', function($http) {
//   let obj = {};
//   obj.planets = [];
//   obj.getPlanets = (cb) => {
//     $http.get("http://swapi.co/api/planets/")
//     .success( data => {
//       obj.planets = data.results;
//       cb();
//     })
//     .error( error => {
//       cb(error);
//       console.error(error);
//     });
//   };
//   return obj;
// });
