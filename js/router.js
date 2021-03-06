app.config(function ($routeProvider) {
 $routeProvider

    .when('/', {
     templateUrl: 'pages/home.html',
     controller:'authController',
     access: {restricted: true}
   })

   .when('/login', {
     templateUrl: 'pages/auth/login.html',
     controller:'authController',
   })

    .when('/signup', {
     templateUrl: 'pages/auth/signUp.html',
     controller:'authController',
     access: {restricted: true}
   })

     .when('/updateinfo', {
     templateUrl: 'pages/auth/updateEmailAndPass.html',
     controller:'authController',
   })

       .when('/resetpassword', {
     templateUrl: 'pages/auth/resetpassword.html',
     controller:'authController',
   })

   .when('/deleteaccount', {
     templateUrl: 'pages/auth/deleteAccount.html',
     controller:'authController',
   })

    .when('/accountInfo', {
     templateUrl: 'pages/auth/accountInfo.html',
     controller:'accountInfoController',
     access: {restricted: true}
   })

   .when('/admin', {
     templateUrl: 'pages/admin/admin.html',
     controller:'mainController',
     access: {restricted: true}
   })

   .otherwise({redirectTo: '/'});
});

// app.run(function ($rootScope, $location, $route, authService) {
//   $rootScope.$on('$routeChangeStart', function (event, next, current) {
//     if (next.access.restricted && AuthService.isLoggedIn() === false) {

//       $location.path('/login');
//     }
//   });
// });

