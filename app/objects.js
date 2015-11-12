exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);

  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var key=[];
    var val=[];
    var arr=[];
    key = _.keys(obj);
    val = _.values(obj);
    _.each(key, function(currVal, idx, keys){
      arr[idx]= currVal + ": "+ val[idx];
    });
    console.log(arr);
    return arr;
  }
};
