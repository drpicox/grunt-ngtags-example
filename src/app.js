angular.module('myApp', [])

.directive('id', function() {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope,element,attrs) {
			scope.$parent.$ = scope.$parent.$ || {};
			scope.$parent.$[attrs.id] = scope.vm;
		},
	}
});
