exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split('');
    var currLett='';
    var count= 0;
    var newarr =[];
    for(var i = 0; i<arr.length; i++){
      if(i ===0){
        count++;
        newarr.push(arr[i]);
      }
      else{
        if(currLett === arr[i]){
          count++;
          if(count<= amount){
            newarr.push(arr[i]);
          }
        }
        else{
          count = 1;
          newarr.push(arr[i]);
        }
      }

      currLett = arr[i];
    }
    return newarr.join('');
  },
  wordWrap: function(str, cols) {
    var arr = str.split(" ");
    var newStr = "";
    var count =0;
    _.each(arr, function(currVal, idx, arr){
      if(idx === (arr.length-1)){
        newStr += currVal;
      }
      else{
      if(count + currVal.length + arr[idx+1].length <cols){
        newStr += currVal +" ";
        count+= currVal.length;
      }
      else{
        newStr +=currVal + "\n";
        count = 0;
      }
    }
    });
    console.log(arr);
    console.log(newStr);
    return newStr;
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
