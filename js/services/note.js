angular.module("NoteWrangler")
.factory('Note', ['$http', function NoteFactory($http) {
	return {
		all: function() {
			return $http({method: "GET", url: "/notes"});
		},
		create: function(note) {
			return $http({method: "POST", url: "/notes", data: note});
		}
	};
}]);