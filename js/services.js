app.factory('viewFactory', function($http){
	return {
		getData: function(link) {
			request = $http({method: 'GET', url: serverUrl+link})
				.success(function(data, status, headers, config) {})
				.error(function(data, status, headers, config) {});
			return (request.then(handleSuccess, handleError));
		},
		
		getTaskChart: function(passed, failed){
			var chartObject = {};
			chartObject.type = "PieChart";
			chartObject.data = [
			   ['Status', 'Number'],
			   ['Passed', passed],
			   ['Failed', failed]
			  ];
		//    chartObject.data.push(['Services',20000]);
			chartObject.options = {
				title: 'Test Status',
				displayExactValues: true,
				width: 70,
				height: 70,
		//        is3D: true,
				chartArea: {left:0,top:0,bottom:0,height:"100%",width:"100%"},
				colors: ["#70AD47", "#ED7D31"],
				legend: {position:'none'},
				pieSliceText: 'value',
				pieSliceBorderColor: "#C8C8C8",
				backgroundColor: {fill: "transparent"},
				enableInteractivity: false
			};
			return chartObject;
		},
		
		getValidDate: function(s) {
			var d = new Date(s);console.log(s);
			if ( Object.prototype.toString.call(d) === "[object Date]" ) {
				// it is a date
				if ( isNaN( d.getTime() ) ) {
					// date is not valid
					return "";
				}
				else {
					// date is valid
					return d;
				}
			}
			else {
				// not a date
				return "";
			}
		}
	}
	
	
	function handleSuccess(response){
		return response.data;
	}
	
	function handleError(response){
		return response;
	}
});
/*
app.factory('socket', ['$rootScope', function ($rootScope) {

	var socket = io.connect();

	return {
		on: function (eventName, callback) {
			socket.on(eventName, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					callback.apply(socket, args);
				});
			});
		},
		emit: function (eventName, data, callback) {
			socket.emit(eventName, data, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					if (callback) {
						callback.apply(socket, args);
					}
				});
			})
		}
	};

}]);
*/