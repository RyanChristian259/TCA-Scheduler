app.controller('mainController', ['$scope', '$http', '$location', '$firebase', '$route', '$routeParams', '$firebaseArray', '$firebaseObject', 'userService', 'authService', '$timeout', '$window', function($scope, $http, $location, $firebase, $route, $routeParams, $firebaseArray, $firebaseObject, userService, authService, $timeout, $window) {

  var ref = new Firebase("https://tca-scheduler.firebaseio.com/");

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
  var eventsRef = new Firebase("https://tca-scheduler.firebaseio.com/events");
  //object to be saved to database
  var data = {
    name: $scope.eventName,
    who: $scope.eventWho,
    location: $scope.eventLocation,
    date: userService.currentSelectedDate
  };
    // Push data into database
    eventsRef.push(data);
  };

//***********************************//
//    Event Confirmation Message     //
//***********************************//
$scope.resConfirm = false;
$scope.showUserConfirm = function(){
  $scope.resConfirm = true;
  $timeout(function(){
  }, 5000).then(function() {
  // You know the timeout is done here
  $scope.resConfirm = false;
});
};

//***********************************//
//          Populate Events          //
//***********************************//
$scope.populateEvents = function(){
  var events = [];
  var eventsRef = new Firebase('https://tca-scheduler.firebaseio.com/events/');
  eventsRef.on("value", function(snapshot) {
    eventsInfo = snapshot.exportVal();
    //loop through events to get events info
    for(var key in eventsInfo){
      events.push(eventsInfo[key]);
      }
      $scope.$apply(function () {
      $scope.events = events;
        });
      events = [];
        console.log($scope.events, ' events info key');
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
};
$scope.populateEvents();


}]);//End Controller
