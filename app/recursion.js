exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  },

//thanks to Delimited on Stack Overflow for helpful explanations http://stackoverflow.com/questions/9960908/permutations-in-javascript
  permute: function(arr) {
    var permutated = [];

    function permuting(array, memo){
      var char;
      var memo = memo || [];
      for(var i=0; i<array.length; i++){
        char = array.splice(i,1);
        if (array.length===0){
          permutated.push(memo.concat(char));
        }
        permuting(array.slice(), memo.concat(char));
        array.splice(i,0,char[0]);
      }
      return permutated;
    }
   return permuting(arr);
  },

  fibonacci: function(n) {
    // thanks to Code Academy for explaining recursion with their fibonaci beanstalk https://www.codecademy.com/en/courses/javascript-lesson-205/2/4

    if(n<=2){
      return 1;
    }
    else{
      return this.fibonacci(n-1)+this.fibonacci(n-2);
    }

  },

  validParentheses: function(n) {

  }
};
