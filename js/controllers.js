var serverUrl = 'server/';

app.controller('MainCtrl', ['$scope', 'viewFactory', function ($scope, viewFactory) {
	
	$scope.msg = false;
	$scope.activeDetails = {};
	
	viewFactory.getData('data.json').then(function(dataSet) {
		$scope.data = dataSet;
		for(x in $scope.data) {
			$scope.data[x].starttime = viewFactory.getValidDate($scope.data[x].starttime);
		}
	});
	
	$scope.expand = function(id) {
		if($scope.expanded == id) {
			$scope.expanded = null;
			$scope.activeDetails = {};
		} else {
			$scope.msg = "loading...";
			viewFactory.getData('details'+id+'.json').then(function(dataSet) {
				$scope.activeDetails = dataSet;
				$scope.activeDetails.build.date = viewFactory.getValidDate($scope.activeDetails.build.date);
				$scope.activeDetails.unittest.chart  = viewFactory.getTaskChart($scope.activeDetails.unittest.passed, $scope.activeDetails.unittest.failed);
				$scope.activeDetails.functionaltest.chart  = viewFactory.getTaskChart($scope.activeDetails.functionaltest.passed, $scope.activeDetails.functionaltest.failed);
				$scope.expanded = $scope.expanded = id;
				$scope.msg = false;
			});
		}
	};
	
	$scope.getBarStyle = function(results) {
		var color = {
						pending: '#D8D8D8',
						running: '#5B9BD5',
						rejected: '#C00000',
						complete: '#538135',
						accepted: '#538135'
					};
		return {width: results.percentage + "%", background: color[results.status]};
	};
	
	$scope.showDetails = function() {
		;
	}
	
}]);