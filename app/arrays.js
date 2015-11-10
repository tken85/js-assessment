exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    _.each(arr, function(currVal, idx, arr){
      if(currVal === item ){
        arr.splice(idx, 1);
      }
    });
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    /*return _.each(arr, function(currVal, idx, currArr){
      if(currVal === item ){
        currArr.splice(idx, 1);
      }
    });*/

  },

  append : function(arr, item) {
     arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var newCount = 0;
    _.each(arr, function(currVal, idx, arr){
      if(currVal === item){
        newCount ++;
      }
    })
    return newCount;
  },

  duplicates : function(arr) {
    var dupFree = _.uniq(arr);
    return dupFree;
  },

  square : function(arr) {
    return arr.map(function(num){return num*num;});
  },

  findAllOccurrences : function(arr, target) {

  }
};
