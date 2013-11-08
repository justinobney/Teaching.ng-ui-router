(function() {
    'use strict';

    var app = angular.module('Learn-UI-Router');

    app.run(function($state) {
        $state.transitionTo('inbox')
    })

})()
