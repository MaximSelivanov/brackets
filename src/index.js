module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBracket = ['(','[','{','|','1','3','5','7','8'];
  const closeBracket = [')',']','}','|','2','4','6','7','8'];
  let arr = str.split('');
  let count = 0;
  
  for (let i = 0; i < arr.length; i++)
    for(let j = 0; j < openBracket.length; j++)
        for(let p = 0; p < closeBracket.length; p++){
          if (arr[i] == openBracket[j]) {
            count++
          }
          if (arr[i] == closeBracket[p]){
            count--
          } 
          if(count < 0) {
            break;
          }
  }

  if (count != 0) {
    return(false)
  }
  else{
    return(true)
  }

  
}
