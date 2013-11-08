(function(){
	'use strict';

	var app = angular.module('Learn-UI-Router');

	app.value('toastr', toastr);

	app.factory('LayoutManager', [function () {
		var service = {};

		service.showAlert = true;

		service.setAlertVisible = function(showAlert){
			service.showAlert = showAlert;
		};
	
		return service;
	}])

	app.factory('InboxService', function($q){
		var service = {};

		var data = [
			{ id:1, title:'This is a really important message', content: 'This is message one.. Just some test data here..'},
			{ id:2, title:'This one.. not so much..', content: 'This is message two.. Just some test data here..'},
			{ id:3, title:'Definitely spam here..', content: 'This is message three.. Just some test data here..'}
		];

		service.getAll = function(){
			var dfd = $q.defer();

			dfd.resolve(data);

			return dfd.promise;
		};

		service.find = function(id){
			var dfd = $q.defer();

			var item = null;

			var results = data.filter(function(entity){
				return entity.id == id;
			});

			if (results.length)
				dfd.resolve(results[0]);
			else
				dfd.reject('entity not found');

			return dfd.promise;
		};

		return service;
	});

	app.factory('ProjectService', function($q){
		var service = {};

		var data = [
			{ id:1, name: "Justin's big project", vendorCount: 15, employeeCount: 25, estimatedCost: 1234.56},
			{ id:2, name: "Envoc IPO", vendorCount: 150, employeeCount: 33, estimatedCost: 234.34},
			{ id:3, name: "Take over the work", vendorCount: 5, employeeCount: 5, estimatedCost: 987.65}
		];

		service.getAll = function(){
			var dfd = $q.defer();

			dfd.resolve(data);

			return dfd.promise;
		};

		service.find = function(id){
			var dfd = $q.defer();

			var item = null;

			var results = data.filter(function(entity){
				return entity.id == id;
			});

			if (results.length)
				dfd.resolve(results[0]);
			else
				dfd.reject('entity not found');

			return dfd.promise;
		};

		return service;
	});
})()