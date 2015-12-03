//Service for User Service
app.service('userService', ['$q', '$timeout', '$http',
  function($q, $timeout, $http) {

    var ref = new Firebase("https://tca-scheduler.firebaseio.com/");

    var currentUserID = 'nothing yet';

    var currentUserKey = 'nothing yet';

}]); //end Service
