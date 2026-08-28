// ! Task: 121. Best Time to Buy and Sell Stock
// ? https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// ! Description
// ? You are given an array prices where prices[i] is the price
// ? of a given stock on the ith day. You want to maximize your
// ? profit by choosing a single day to buy one stock and choosing
// ? a different day in the future to sell that stock.

// ? Return the maximum profit you can achieve from this transaction. 
// ? If you cannot achieve any profit, return 0.

// ! Examples:
// ? Input: prices = [7,1,5,3,6,4] ===> Output: 5 (min 1, max 6)
// ? Input: prices = [7,6,4,3,1] ===> Output: 0 (min 1, max - don't have)


var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for(let price of prices){
        {/*
          1_ minPrice = min(Infinity, 7) = 7
          2_ minPrice = min(7, 1) = 1
          3_ minPrice = min(1, 5) = 1
          4_ minPrice = min(1, 3) = 1
          5_ minPrice = min(1, 6) = 1
          6_ minPrice = min(1, 4) = 1
        */}
        minPrice = Math.min(minPrice, price);
        {/*
           1_ maxProfit = max(0, 7 - 7) = max(0, 0) = 0
           2_ maxProfit = max(0, 1 - 1) = max(0, 0) = 0
           3_ maxProfit = max(0, 5 - 1) = max(0, 4) = 4
           4_ maxProfit = max(4, 3 - 1) = max(4, 2) = 4
           5_ maxProfit = max(4, 6 - 1) = max(4, 5) = 5
           6_ maxProfit = max(5, 4 - 1) = max(5, 3) = 5
        */}
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

var maxProfit = function(prices) {
  let result = 0
  let min = prices[0]
    
  for(let i = 0; i < prices.length; i++) {
    let profit = prices[i] - min;       // ? 0, -6, 4, 2, 5, 3
    result = Math.max(result, profit)   // ? 7, 7, 4, 2, 5, 3
    min = Math.min(min, prices[i])      // ? 7, 1, 1, 1, 1, 1
    
    // ? Шаг_01 (цена 7):
    //   profit = 7 - 7 = 0
    //   result = max(0, 0) = 0
    //   min = min(7, 7) = 7
    // ? Шаг_02 (цена 1):
    //   profit = 1 - 7 = -6
    //   result = max(0, -6) = 0   (прибыль не может быть отрицательной)
    //   min = min(7, 1) = 1
    // ? Шаг_03 (цена 5):
    //   profit = 5 - 1 = 4
    //   result = max(0, 4) = 4
    //   min = min(1, 5) = 1
    // ? Шаг_04 (цена 3):
    //   profit = 3 - 1 = 2
    //   result = max(4, 2) = 4
    //   min = min(1, 3) = 1
    // ? Шаг_05 (цена 6):
    //   profit = 6 - 1 = 5
    //   result = max(4, 5) = 5   ← максимальная прибыль
    //   min = min(1, 6) = 1
    // ? Шаг_06 (цена 4):
    //   profit = 4 - 1 = 3
    //   result = max(5, 3) = 5   (остаётся 5)
    //   min = min(1, 4) = 1
    
  }
    
  return result
};