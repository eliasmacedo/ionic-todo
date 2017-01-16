// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('starter', ['ionic'])
//
// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//
//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

//setup angular
var app = angular.module('ionic-todo', ['ionic', 'LocalStorageModule', 'ionic-todo.controllers']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

// It is a good practice to add a prefix to our stored entities so as avoid being overwritten in future.
// This sets the Local Storage prefix
app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('ionic-todo');
});
