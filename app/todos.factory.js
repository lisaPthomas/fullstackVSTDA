(function() {
    'use strict';

    angular.module('myApp')
        .factory('TodosFactory', TodosFactory);

    TodosFactory.$inject = ['$http', '$q'];

    function TodosFactory($http, $q) {
        var service = {
            getTodos: getTodos,
            addTodo: addTodo,
            deleteTodo: deleteTodo,
            updateTodo: updateTodo
        };

        return service;
        //////////////////

        function getTodos(todoData) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:52223/api/TodoEntries/'
            }).then(function(response) {

                defer.resolve(response);
            })

            return defer.promise;

        }

        function addTodo(todo) {
            var defer = $q.defer();
            $http({
                method: 'POST',
                url: 'http://localhost:52223/api/TodoEntries/',
                data: todo,
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found')
                }
                //error code
            }, function(error) {
                console.log(error);
                defer.reject(error);
            });
            return defer.promise;
        }

        function deleteTodo(data) {
            var defer = $q.defer();
            $http({
                method: 'DELETE',
                url: 'http://localhost:52223/api/TodoEntries/' + data,

                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found')
                }
                //error code
            }, function(error) {
                console.log(error);
                defer.reject(error);
            });
            return defer.promise;

        }

        function updateTodo(id, object) {
            var defer = $q.defer();
            $http({
                method: 'PUT',
                url: 'http://localhost:52223/api/TodoEntries/' + id,
                data: object
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found')
                }
                //error code
            }, function(error) {
                console.log(error);
                defer.reject(error);
            });
            return defer.promise;

        }
    }
})();
