exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
   obj.fn= fn;
   return obj.fn();
  },

  functionFunction : function(str) {
    var secondFunction = function(newStr){
      return str + ", " + newStr;
    };
    return secondFunction;
  },

  makeClosures : function(arr, fn) {
    var funcArr =[];
    var newFunction  = function(stuff){
      return function(){return fn(stuff);};
    };
    for(var i=0; i<arr.length; i++){
      funcArr.push(newFunction(arr[i]));
    }
    return funcArr;
  },

  partial : function(fn, str1, str2) {
    var secondFunction = function(newStr){
      return fn(str1,str2,newStr);
    };
    return secondFunction;
  },

  useArguments : function() {
    var args = [].slice.call(arguments);
    var total = 0;
    _.each(args, function(currVal){
      total += currVal;
    });
    return total;
  },

  callIt : function(fn) {
   var args = [].slice.call(arguments);
   args.shift();
   return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var secondFunction = function(){
      var args1 = [].slice.call(arguments);
      var args2 = args.concat(args1);
      return fn.apply(this,args2);
    };
    var args = [].slice.call(arguments);
    args.shift();
    return secondFunction;
  },

  curryIt : function(fn) {
    var arity = fn.length;
    console.log("arity:" + arity);
      return function f1() {
        var args = [].slice.call(arguments, 0);
        if (args.length >= arity) {
          return fn.apply(this, args);
        }
        else {
          return function f2() {
            var args2 = [].slice.call(arguments,0);
            return f1.apply(this, args.concat(args2));
          };
        }
      };
  }
};
