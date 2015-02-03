/* global angular */

(function () {

	'use strict';

	angular.module('simplysocial', [
		'ui.router',
		'ngResource',
		'directives.modal',
		'templates.app',
		'templates.common']);

	angular.module('simplysocial')
		.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
			$locationProvider.html5Mode(true);
			// For any unmatched url, send to /members
    		$urlRouterProvider.otherwise("/");
    		$stateProvider
				.state('profile', {
					url: '/profile',
					templateUrl:'profile.tpl.html'
				})
				.state('followers', {
					url: '/followers',
					templateUrl:'profile.tpl.html'
				})
				.state('following', {
					url: '/following',
					templateUrl:'profile.tpl.html'
				})
				.state('settings', {
					url: '/settings',
					templateUrl:'settings.tpl.html'
				})
				.state('message', {
					url: '/message',
					templateUrl:'message.tpl.html'
				})
				.state('home', {
					url: '/',
					templateUrl:'home.tpl.html'
				})
	}])

	angular.module('simplysocial')
		.controller('SimplySocialController', ['$scope', function($scope) {
			$scope.modalShown = false;
			$scope.toggleModal = function() {
				$scope.modalShown = !$scope.modalShown;
			};
		}])

}());
