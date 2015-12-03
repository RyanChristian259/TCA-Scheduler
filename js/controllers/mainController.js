app.controller('mainController', ['$scope', '$http', '$location', '$firebase', '$route', '$routeParams', '$firebaseArray', '$firebaseObject', 'userService', 'authService', '$window', function($scope, $http, $location, $firebase, $route, $routeParams, $firebaseArray, $firebaseObject, userService, authService, $window) {

  var ref = new Firebase("https://momsmorningscheduler.firebaseio.com/");

  var usersCollection = ref.child("users");

  var userKey = userService.currentUserKey;

//***********************************//
//         Check Login State         //
//***********************************//
var authData = ref.getAuth();
if (authData) {
  // console.log("User " + authData.uid + " is logged in with auth controller " + authData.provider);
  $scope.authData = authData;
  $scope.greetUser = authData.password.email;
} else {
  console.log("User is logged out");
}

//create and event. Create A 'things to bring' and 'volunteer' functions

//***********************************//
//        Admin Create Event         //
//***********************************//
$scope.createEvent = function(){
  //Needs Date, teacher or classroom, and who, what, possibly why.
  console.log('cats');
};


}]);//End Controller





















