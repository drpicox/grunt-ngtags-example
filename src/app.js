angular.module('myApp', [])

.directive('id', function() {
	return {
		restrict: 'A',
		link: function (scope,element,attrs) {
			scope.$ = scope.$ || {};
			scope.$[attrs.id] = scope.vm;
		},
	}
});
;