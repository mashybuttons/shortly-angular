angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window,  $location) {
  // Your code here
  $scope.data = {};

  $scope.updateData = function() {
    // if ($window.localStorage.getItem('com.shortly') === undefined) {
    //   // $location.path('/signin');
    // } else {
      Links.getAll()
        .then(function(result) {
          $scope.data.links = result;
        })
        .catch(function(err) {
          console.error(err);
        });
    // }
  };



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
