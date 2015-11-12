exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var converted = num.toString(2).split('').reverse().join('');
      return parseInt(converted[bit-1]);

  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var newNum = num.toString(2);
    while(newNum.length <8){
      newNum = "0" + newNum;
    }
    return newNum;
  },

  multiply: function(a, b) {
    /*thanks to Jack on stackOverflow for the suggestion http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number*/
    var precisiona = function(){
      if(a.toString().split('.')[1] === undefined){
        return 0;
      }
      else{
        return a.toString().split('.')[1].length;
      }
    };
    var precisionb = function(){
      if(b.toString().split('.')[1] === undefined){
        return 0;
      }
      else{
        return b.toString().split('.')[1].length;
      }
    };
    var precision= 0;
    if(precisiona() >= precisionb()){
      precision = precisiona();
    }
    else{
      precision = precisionb();
    }
    var stringed = (a*b).toFixed(precision);
    return parseFloat(stringed);
  }
};
