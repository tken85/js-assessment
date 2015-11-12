exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var myTimer;
    var adjustTimer = function(){
      console.log(start++);
      if (start <= end){
        myTimer = setTimeout(adjustTimer, 100);
      }
    };
    adjustTimer();

    return {cancel: function(){
      clearTimeout(myTimer);
    }};
  }
};
