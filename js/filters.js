angular.module('futFilters',[]).filter('reverse',function(){
 return function(items) {
    return items.slice().reverse();
  };
});