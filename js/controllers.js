(function(ng){
  ng.module('projector')
    .controller('itemListController', ['$scope', 'titleService', 'taskService', function($scope, titleService, taskService){
      titleService.setTitlePrefix('Projector :: Increase the Learning :: ');
      $scope.tasks = [
        { title: 'Philosophy', path: 'philosophy', selected: false },
        { title: 'Feminism', path: 'feminism', selected: false },
      ];
      $scope.setTitle = titleService.setTitle;
      $scope.selectTask = function(task) {
        taskService.setTask(task);
        task.selected = true;
      };
    }]);
})(angular);

