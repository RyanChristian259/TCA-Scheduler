app.controller('accountInfoController', ['$scope', '$http', '$location', '$firebase', '$route', '$routeParams', '$firebaseArray', '$firebaseObject', 'userService', 'authService', '$window', function($scope, $http, $location, $firebase, $route, $routeParams, $firebaseArray, $firebaseObject, userService, authService, $window) {

  var self = this;

  var ref = new Firebase("https://tca-scheduler.firebaseio.com/");

  var usersCollection = ref.child("users");

  var userKey = userService.currentUserKey;


//***********************************//
//      User set Personal Info       //
//***********************************//
$scope.userInfo = function(){


  var userFirstNameRef = new Firebase("https://tca-scheduler.firebaseio.com/users/" + $scope.key + "/firstName");
  var userLastNameRef = new Firebase("https://tca-scheduler.firebaseio.com/users/" + $scope.key + "/lastName");
  var userStreetRef = new Firebase("https://tca-scheduler.firebaseio.com/users/" + $scope.key + "/street");
  var userCityRef = new Firebase("https://tca-scheduler.firebaseio.com/users/" + $scope.key + "/city");
  var userStateRef = new Firebase("https://tca-scheduler.firebaseio.com/users/" + $scope.key + "/state");
  var userZipRef = new Firebase("https://tca-scheduler.firebaseio.com/users/" + $scope.key + "/zip");
  var userPhoneRef = new Firebase("https://tca-scheduler.firebaseio.com/users/" + $scope.key + "/phone");

  // download the data into a local object
  var syncFirstNameObject = $firebaseObject(userFirstNameRef);
  var syncLastNameObject = $firebaseObject(userLastNameRef);
  var syncStreetObject = $firebaseObject(userStreetRef);
  var syncCityObject = $firebaseObject(userCityRef);
  var syncStateObject = $firebaseObject(userStateRef);
  var syncZipObject = $firebaseObject(userZipRef);
  var syncPhoneObject = $firebaseObject(userPhoneRef);

  // synchronize the object with a three-way data binding
  syncFirstNameObject.$bindTo($scope, "firstName");
  syncLastNameObject.$bindTo($scope, "lastName");
  syncStreetObject.$bindTo($scope, "street");
  syncCityObject.$bindTo($scope, "city");
  syncStateObject.$bindTo($scope, "state");
  syncZipObject.$bindTo($scope, "zip");
  syncPhoneObject.$bindTo($scope, "phone");

};



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

//*******************************//
//       User Key callback       //
//*******************************//
$scope.user = {};
$scope.userCallback = function () {

 var ref = new Firebase("https://tca-scheduler.firebaseio.com/users");
 var key = '';
 var userData = $scope.user;
 ref.on("value", function(snapshot) {
  snapshot.forEach(function (userSnapshot) {
    if (authData.uid === userSnapshot.val().id) {
      $scope.key = userSnapshot.key();
      userService.currentUserKey = $scope.key;
      console.log($scope.key, ' key available');
      authService.userKey = $scope.key;
    }
  });
  // $scope.populateUserKids();
  // $scope.populateUserKidsAge();
  // $scope.populateUserEvents();
  $scope.userInfo();
  console.log(authService.userKey, ' auth service user key');
});
};

$scope.userCallback();

}]);//End Controller






