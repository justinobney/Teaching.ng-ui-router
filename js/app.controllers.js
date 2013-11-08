(function() {
    'use strict';

    var app = angular.module('Learn-UI-Router');

    app.controller('MainCtrl', function MainCtrl($scope, $state, LayoutManager) {
        
        $scope.$on('$stateChangeSuccess', handleStateChange)
        $scope.LayoutManager = LayoutManager;

        $scope.getNavActive = function(navState) {
            return $state.includes(navState) ? 'active' : '';
        };

        $scope.$watch(function(){ return $scope.LayoutManager.showAlert; }, 
                     function(val, prev){
                        if(val != prev)
                            toastr.success('Alert shown: ' + val);
                     });

        function handleStateChange(event, toState, toParams, fromState, fromParams){
              var showAlert = toState.data && toState.data.showAlert;
              LayoutManager.setAlertVisible(showAlert);
        }
    });

    app.controller('InboxListCtrl', function InboxListCtrl($scope, InboxService) {
        InboxService.getAll().then(function(messages){
            $scope.messages = messages;
        });
    });

    app.controller('InboxMessageCtrl', function InboxMessageCtrl($scope, $stateParams, InboxService) {
        InboxService.find($stateParams.id).then(function(message){
            $scope.message = message;
        });
    });

    app.controller('ProjectListCtrl', function InboxListCtrl($scope, ProjectService) {
        ProjectService.getAll().then(function(projects){
            $scope.projects = projects;
        });
    });

    app.controller('ProjectDetailCtrl', function InboxMessageCtrl($scope, $stateParams, ProjectService) {
        ProjectService.find($stateParams.id).then(function(project){
            $scope.project = project;
        });
    });
})()
