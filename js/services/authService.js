//Service for Auth Service - see Auth Controller
app.service('authService', ['$q', '$timeout', '$http',
  function($q, $timeout, $http) {

    var ref = new Firebase("https://tca-scheduler.firebaseio.com/");

    var usersCollection = ref.child("users");

    function isLoggedIn(authData) {
      authData = ref.getAuth();
      if (authData) {
        console.log("Authenticated user with uid:", authData.uid);
      return true;
      } else {
        return false;
      }
      console.log('hit');
    }
    // isLoggedIn();
    return ({
      isLoggedIn: isLoggedIn,

    });
  }]); // end service


