(function() {
    'use strict';

    var app = angular.module('Learn-UI-Router', ['ui.router']);

    app.config(function($stateProvider) {
        $stateProvider
            .state('inbox', {
                url: "/inbox",
                views: {
                    "panel": {
                        templateUrl: "partials/inbox.tmpl.html"
                    }
                },
                data: {
                    showAlert: false
                }
            })
            .state('inbox.message', {
                url: "/:id",
                views: {
                    "main@": {
                        templateUrl: "partials/inbox.message.tmpl.html"
                    }
                },
                data: {
                    showAlert: true
                }
            })
            .state('projects', {
                url: "/projects",
                views: {
                    "panel": {
                        templateUrl: "partials/projects.tmpl.html"
                    }
                },
                data: {
                    showAlert: true
                }
            })
            .state('projects.detail', {
                url: "/:id",
                views: {
                    "main@": {
                        templateUrl: "partials/projects.detail.tmpl.html"
                    }
                },
                data: {
                    showAlert: false
                }
            });
    })
})()
