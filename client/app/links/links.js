angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.updateData = function() {
    Links.getAll()
      .then(function(result) {
        $scope.data.links = result;
      })
      .catch(function(err) {
        console.error(err);
      });
  }();



  // $scope.user = {};

  // $scope.signin = function () {
  //   Auth.signin($scope.user)
  //     .then(function (token) {
  //       $window.localStorage.setItem('com.shortly', token);
  //       $location.path('/links');
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
});
