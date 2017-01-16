angular.module('ionic-todo.controllers', [])

// Our controller will be serving as the middle man between our data (Local Storage) and the view
.controller('main', ['$scope', '$ionicModal', 'localStorageService', function($scope, $ionicModal, localStorageService) {
  //store the entities name in a variable
  var taskData = 'task';

  //initialize the tasks and task scopes with default values
  $scope.tasks = [];
  $scope.task = {};

  //configure the ionic modal before use
  $ionicModal.fromTemplateUrl('templates/new_task_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.newTaskModal = modal;
  });

  $scope.getTasks = function () {
    //gets all tasks from local storage
    if (localStorageService.get(taskData)) {
      $scope.tasks = localStorageService.get(taskData);
    } else {
      $scope.tasks = [];
    }
  };
  $scope.saveTask = function () {
    //creates or updates a task
    if( !angular.isUndefined($scope.task.index) ){
      $scope.tasks[$scope.task.index] = $scope.task;
    }else{
      $scope.tasks.push($scope.task);
      setTasks(taskData);
    }
    $scope.task = {};
    $scope.closeTaskModal();
  };
  $scope.openTask = function (index) {
    $scope.task = $scope.tasks[index];
    $scope.task.index = index;
    $scope.openTaskModal('Edit Task');
  };
  $scope.removeTask = function (index) {
    //removes a task
    $scope.tasks.splice(index, 1);
    setTasks(taskData);
  };
  $scope.completeTask = function (index) {
    //updates a task as completed or undoes completed status
    if (index !== -1) {
      $scope.tasks[index].completed = $scope.tasks[index].completed;
    }
    setTasks(taskData);
  };
  $scope.openTaskModal = function (method) {
    //reuse same modal for create and update, uses 'method' for button label
    $scope.newTaskModal.method = angular.isUndefined(method) ? 'Create Task' : method;
    $scope.newTaskModal.show();
  };
  $scope.closeTaskModal = function () {
    $scope.task = {};
    $scope.newTaskModal.hide();
  };

  var setTasks = function (taskData) {
    localStorageService.set(taskData, $scope.tasks);
  }
}]);
