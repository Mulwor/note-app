// ? You are given an array of strings names, and an array heights that 
// ? consists of distinct positive integers. Both arrays are of length n.

// ? For each index i, names[i] and heights[i] denote the name and height 
// ? of the ith person.

// ? Return names sorted in descending order by the people's heights.

// ? Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// ? Output: ["Mary","Emma","John"]
// ? Explanation: Mary is the tallest, followed by Emma and John.

// ? Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// ? Output: ["Bob","Alice","Bob"]
// ? Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

// ! Первое решение
var sortPeople = function(names, heights) {
  let newObj = []
 
  for(let i = 0; i < names.length; i++) {
    let obj = {
      name: names[i], 
      height: heights[i]
    }
    newObj.push(obj)
  }

  newObj.sort((a, b) => b.height - a.height)

  let sortedArray = [];

  for (let i = 0; i < newObj.length; i++) {
    sortedArray.push(newObj[i].name)
  }

  return sortedArray;
};


// ! Второе решение
var sortPeople = function(names, heights) {
  let pair = [];

  for (let i = 0; i < heights.length; i++) {
    pair.push([names[i], heights[i]]);
  }

  pair.sort((a, b) => b[1] - a[1]);

  let sortedNames = [];
  for (let i = 0; i < pair.length; i++) {
    sortedNames.push(pair[i][0]);
  }
  return sortedNames;
};


// ! Третье решение
var sortPeople = function(names, heights) {
  const people = names.map((name, index) => ({
    name: name,
    height: heights[index],
	}));
	
  people.sort((a, b) => b.height - a.height);

	return people.map((person) => person.name);  
};


// ! Четвертое решение
var sortPeople = function(names, heights) {
  const map = new Map();

  for(let i = 0; i < names.length; i++){
    map.set(heights[i], names[i]);
  }

  heights.sort((a, b) => b - a);

  for(let i = 0; i < names.length; i++){
    names[i] = map.get(heights[i]);
  }

  return names;
};