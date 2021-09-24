//anagrams(lives,elvis) => true
//anagrams(lives,slevf) => false
function anagrams(str1, str2) {

  // Fill this in

}


function commonElements(arr1, arr2) {

  // Fill this in

}


function duplicate(arr) {

  // Fill this in

}


function twoSum(nums, target) {

  // Fill this in

}




function wordPattern(pattern, strings) {
  let obj = {};
  for(let i = 0; i < pattern.length; i++){
    if(!(pattern[i] in obj)  && !(strings[i] in obj)){
      obj[pattern[i]] = strings[i];
      obj[strings[i]] = pattern[i];
    }else if(obj[pattern[i]] !== strings[i] || 
      obj[strings[i]] !== pattern[i]){
        return false;
    }
  }
  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];