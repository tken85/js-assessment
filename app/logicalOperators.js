exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
  or : function(a, b) {
    if(a === true || b === true){
      return true;
    }
    else{
      return false;
    }
  },

  and : function(a, b) {
    if((a === true && b === true) || (a != 0 && b !=0)){
      return true;
    }
    else{
      return false;
    }
  }
};
