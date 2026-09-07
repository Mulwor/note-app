// ! 274. H-Index
// ? Task: https://leetcode.com/problems/h-index/description/

// ? Given an array of integers citations where citations[i] is the 
// ? number of citations a researcher received for their ith paper, 
// ? return the researcher's h-index. According to the definition of
// ? h-index on Wikipedia: The h-index is defined as the maximum 
// ? value of h such that the given researcher has published at least 
// ? h papers that have each been cited at least h times.

// ? Input: citations = [3,0,6,1,5] ===> Output: 3
// ? Input: citations = [1,3,1] ===> Output: 1

var hIndex = function(citations) {
  const sorted = citations.sort((a,b) => b-a)
    
  for(let i = 0; i < sorted.length; i++){
    if(sorted[i] <= i) return i
  }

  return sorted.length
};