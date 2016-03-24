<<<<<<< HEAD
angular.module('NoteWrangler')
.directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '=',
      tweeted: '='
    },
    link: function(scope, element) {
      if(scope.tweeted) {
        element.addClass('tweeted');
      }
    }
  };
}]);
=======
angular.module('NoteWrangler').directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    controller: function($scope) {
      $scope.header = 'Note Title';
      $scope.description = 'A lovely note description.';
    }
  };
}]);
>>>>>>> 131f32d08c964c2160e03005cec7f87ba557c0ad
