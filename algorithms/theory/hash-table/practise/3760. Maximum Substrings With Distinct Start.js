// ! 3760. Maximum Substrings With Distinct Start
// * https://leetcode.com/problems/maximum-substrings-with-distinct-start/description/?envType=problem-list-v2&envId=hash-table

// ? You are given a string s consisting of lowercase 
// ? English letters. Return an integer denoting the maximum
// ? number of substrings you can split s into such that 
// ? each substring starts with a distinct character 
// ? (i.e., no two substrings start with the same character).

// * Input: s = "abab" => Output: 2
// * Input: s = "abcd" => Output: 4
// * Input: s = "aaaa" => Output: 1

var maxDistinct = function(s) {
  let set = new Set(s)

  return set.size
};

var maxDistinct = function(s) {
  let set = new Set();
  
  for(let i = 0 ; i < s.length; i++){
    set.add(s[i]);
  }
  
  return set.size;
};

var maxDistinct = function(s) {
  const uniqueString = [...new Set(s)].join("");

  return uniqueString.length;
};

// ? ============================================================

var maxDistinct = function(s) {
  let  map = new Map();
  let count = 1;
  map.set(s[0], true);
    
  for(let i = 1; i < s.length; i++){
    if(!map.has(s[i])){
      map.set(s[i],true);
      count++;
    }
  }
    
  return count;  
};