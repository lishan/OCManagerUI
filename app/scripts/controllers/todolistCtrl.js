"use strict";
/**
 * TodoList Controller
 */
angular
  .module("basic")
  .controller("TodoListCtrl", [
    "$rootScope",
    "$scope",
    "sso",
    "Cookie",
    "$state",
    function($rootScope, $scope, sso, Cookie, $state) {
        $scope.todoListChosenType = {
            alltype: true,
            resourcetype: false,
            tooltype: false
        };

        $scope.changeTodoListChosenType = function(typename) {
            angular.forEach($scope.todoListChosenType, function(_, key) {
                $scope.todoListChosenType[key] = false;
            });
            $scope.todoListChosenType[typename] = true;
        };

        $scope.myTodoList = [
            {
                name:'hive',
                commitdate: '2018-05-23 16:23:45',
                limitcapacity: 100,
                applystatus: '申请中',
                applytype: '资源申请',
            },
            {
                name:'hive',
                commitdate: '2018-05-23 16:23:45',
                limitcapacity: 100,
                applystatus: '申请中',
                applytype: '资源申请',
            },
            {
                name:'hive',
                commitdate: '2018-05-23 16:23:45',
                limitcapacity: 100,
                applystatus: '申请中',
                applytype: '资源申请',
            },
            {
                name:'hive',
                commitdate: '2018-05-23 16:23:45',
                limitcapacity: 100,
                applystatus: '已批准',
                applytype: '资源申请',
            },
            {
                name:'hive',
                commitdate: '2018-05-23 16:23:45',
                limitcapacity: 100,
                applystatus: '已批准',
                applytype: '工具申请',
            },
            {
                name:'hive',
                commitdate: '2018-05-23 16:23:45',
                limitcapacity: 100,
                applystatus: '已批准',
                applytype: '工具申请',
            },
        ];
    }
  ]);
