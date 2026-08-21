// ! 3668. Restore Finishing Order

// ? You are given an integer array order of length n and 
// ? an integer array friends.
// ? - order contains every integer from 1 to n exactly once, 
// ? representing the IDs of the participants of a race in 
// ? their finishing order.
// ? - friends contains the IDs of your friends in the race 
// ? sorted in strictly increasing order. Each ID in friends
// ? is guaranteed to appear in the order array.
// ? Return an array containing your friends' IDs in their
// ? finishing order.

// ? Input: order = [3,1,2,5,4], friends = [1,3,4]
// ? Output: [3,1,4]

// ? Input: order = [1,4,5,3,2], friends = [2,5]
// ? Output: [5,2]

var recoverOrder = function(order, friends) {
  let set = new Set(friends);
  let result = [];

  for (let i = 0; i < order.length; i++){
    if (set.has(order[i])) {
      result.push(order[i])
    }
  }

  // for (const place of order) {
  //  if (set.has(place)) result.push(place)
  //  }

  return result
};



var recoverOrder = function(order, friends) {
  let set = new Set();
  let result = [];

  for (let i = 0; i < friends.length; i++) {
    set.add(friends[i])
  }

  for (let j = 0; j < order.length; j++) {
    if (set.has(order[j])) {
      result.push(order[j])
    }
  }

  return result;
};

// ! ====================================================
var recoverOrder = function(order, friends) {
  let returnArray = [];
  
  for (let person of order) {
    if (friends.includes(person)) {
        returnArray.push(person)
    }
  }

  return returnArray;
};

// ! ==================================================
var recoverOrder = function(order, friends) {
  return order.filter(n => friends.includes(n))
};