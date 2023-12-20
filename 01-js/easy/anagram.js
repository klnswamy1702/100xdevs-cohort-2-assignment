/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sort(str){
  let array=str.split("");
  array=array.sort();
  let sortedStr=array.join("");
  return sortedStr;

}


function isAnagram(str1, str2) {

  let strA=str1.toLower();
  let strB=str2.toLower();

  if (sort(strA)==sort(strB)){
    return true;
  }
  else{
    return false;
  }

}  

module.exports = isAnagram;
