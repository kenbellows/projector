(function(ng){
  ng.module('projector')
    
    .factory('titleService', ['$window', function($window){
      var _prefix = '';
      return {
        setTitlePrefix: function(prefix) {
          // grab the current title suffix by removing the current prefix from the current title
          var currSuffix = this.getTitle().substr(_prefix.length);
          // set the new prefix
          _prefix = prefix;
          this.setTitle(currSuffix);
        },
        setTitle: function(title) { $window.document.title = _prefix+title; },
        getTitle: function() { return $window.document.title; },
      };
    }])
    
    .factory('taskService', function(){
      var _task = '';
      return {
        setTask: function(task) { _task = task; },
        getTask: function() { return _task; },
      };
    });

})(angular);

