'use strict';

/**
 * @ngdoc function
 * @name AngularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the AngularTodoApp
 */
angular.module('AngularTodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    // Get 'todos' model from 'todos list' main html
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
    	localStorageService.set('todos', $scope.todos);
    }, true);
    
    $scope.addTodo = function() {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };

  });

