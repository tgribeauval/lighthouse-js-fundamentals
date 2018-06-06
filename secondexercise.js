function countLetters(word){
  var letterIndexObj = {};
  for (var i = 0;i < word.length; i++){
    if (!letterIndexObj[word[i]]){
      letterIndexObj[word[i]] =  [i];
    }
    else {
      letterIndexObj[word[i]].push(i);
    }
  }
  return letterIndexObj;
}
console.log(countLetters("banana"));
