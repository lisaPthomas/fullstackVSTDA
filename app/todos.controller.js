(function() {
    'use strict';

    angular.module('myApp')
        .controller('TodosController', TodosController);

    TodosController.$inject = ['TodosFactory'];

    //ngInject




    function TodosController(TodosFactory) {
        var vm = this;
        vm.title = 'TodosController';
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;
        vm.updateTodo = updateTodo;

        activate();

        function activate() {
            TodosFactory.getTodos().then(function(response) {

                vm.todos = response.data;
                console.log(response);

            })
        }

        function addTodo(todoName, todoPriority) {
            vm.createDate = new Date();
            TodosFactory.addTodo({ 'Text': todoName, 'Priority': todoPriority, 'CreatedDate': vm.createDate })
                .then(function(response) {
                    activate();
                }, function(error) {})
        }

        function updateTodo(id, object) {
            TodosFactory.updateTodo(id, object).then(function(response) {
                activate();
            }, function(error) {})
        }

        function deleteTodo(data) {
            TodosFactory.deleteTodo(data).then(function(response) {
                activate();
            }, function(error) {})


        }
    }
})();




// myApp.controller('MainController', ['$scope', '$http', function($scope) {

//     // $scope.todos = [];

//     $http({
//         method: 'GET',
//         url: 'http://localhost:52223/api/todoentries',
//         params: {
//             id: //??need params
//         }

//     }).then(function(response))

//     //create Put method
//     $scope.addTodo = function() {
//         $scope.todos.push({ 'text': $scope.text, 'priority': $scope.priority });
//         $scope.text = '';
//         $scope.priority = '';
//     };

//     $scope.clearCompleted = function() {
//         $scope.todos = _.filter($scope.todos, function(todo) {
//             return !todo.done;
//         });
//     };

//     // //add function for deleting list
//     $scope.deleteTodo = function(item) {
//         var index = $scope.todos.indexOf(item);
//         $scope.todos.splice(index, 1);

//     };


// }])
