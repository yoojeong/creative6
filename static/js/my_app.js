var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http) {

  $scope.todos = [
    {text:'Learn AngularJS', done:false},
    {text: 'Build an app', done:false}
  ];

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };


  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };

  $scope.clearCompleted = function () {
      $scope.todos = _.filter($scope.todos, function(todo){
          return !todo.done;
      });
  };


  $http.get('/user/profile')
    .success(function(data, status, headers, config) {
  $scope.user = data;
  $scope.error = "";
  }).
  error(function(data, status, headers, config) {
  $scope.user = {};
  $scope.error = data;
  });


});
