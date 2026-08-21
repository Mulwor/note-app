// ? Given an array nums. We define a running sum of an array as
// ? runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.

// ? Input: nums = [1,2,3,4] ===> Output: [1,3,6,10]
// ? Input: nums = [1,1,1,1,1] ===> Output: [1,2,3,4,5]


// ! Первое решение
var runningSum = function(nums) {
  // ? Оба - O(1)
  let result = [];
  result[0] = nums[0]
  
  // ? 0(n)
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i]
  }

  return result
};


// ! Второе решение ===> nums ===> [3, 1, 2, 10, 1]
var runningSum = function(nums) {
  let sum = 0;
  
  return nums.map((num) => {
    console.log(num)                 // * [3, 1, 2, 10, 1]
    return sum += num
  })
};

var runningSum = function(nums) {
  const result = []

  nums.reduce((acc, num) => {
    const cur = num + acc;
    result.push(cur);
    return cur;
  }, 0);
  
  return result;
};


// ! Третье решение ===> 
var runningSum = function(nums) {
  let ans = [];
    
  for(let i =0; i < nums.length;i++){
    let total = 0;
        
    for(let j = i; j >= 0; j--){
      total += nums[j];
    }
    
    ans.push(total)
    }

  return ans;
};