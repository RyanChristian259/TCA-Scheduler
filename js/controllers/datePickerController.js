app.controller('datePickerController', ['$scope', '$location', '$firebase', '$firebaseArray', '$rootScope', 'userService', function($scope, $location, $firebase, $firebaseArray, $rootScope, userService) {


  $scope.today = function() {
    $scope.dt = new Date();
  };

  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();


//**Set Max Date for Scheduling availibility**//
//Change the num after .getFullYear to adjust
//Currently set to 2 years out from current date
var setMaxDateYear = new Date().getFullYear();
var setMaxDateMonth = new Date().getMonth() + 24;
$scope.maxDate = new Date(setMaxDateYear, setMaxDateMonth, 1);

//
$scope.open = function($event) {
  $scope.status.opened = true;
};

$scope.setDate = function(year, month, day) {
  $scope.dt = new Date(year, month, day);
};

$scope.dateOptions = {
  formatYear: 'yy',
  startingDay: 1
};

$scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
$scope.format = $scope.formats[1];

$scope.status = {
  opened: false
};


//**************************************//
//      Set date from datepicker        //
//**************************************//
// Set current date as default on page load
var cleanDate = moment($scope.dt).format('YYYY-MM-DD');
  userService.currentSelectedDate = cleanDate;
  var payload = {
    'timeStamp': userService.currentSelectedDate
  };
  $scope.payload = payload;

//Change date when selected from picker
$scope.changeDate = function() {
  var cleanDate = moment($scope.dt).format('YYYY-MM-DD');
  userService.currentSelectedDate = cleanDate;
  var payload = {
    'timeStamp': userService.currentSelectedDate
  };
  $scope.payload = payload;
};

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var afterTomorrow = new Date();
afterTomorrow.setDate(tomorrow.getDate() + 2);

}]); //calendar controller
