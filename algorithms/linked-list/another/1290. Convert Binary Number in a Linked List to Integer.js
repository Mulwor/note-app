// ? 1290. Convert Binary Number in a Linked List to Integer
// ! https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

// * Given head which is a reference node to a singly-linked list. 
// * The value of each node in the linked list is either 0 or 1. 
// * The linked list holds the binary representation of a number.

// * Return the decimal value of the number in the linked list.
// * The most significant bit is at the head of the linked list.

// * Input => [1,0,1] ===> Output => 5
// * Input => [0] ===> Output => 0


var getDecimalValue = function(head) {
  let result = 0; 

  while (head !== null) {
    result*= 2;               // 0, 2, 4
    result+= head.val;        // 0, 2, 4 += 1, 0, 1 => 1, 2, 5
    // ?  result = result * 2 + head.val
    head = head.next;         // Переход на следующий узел
  }

  return result
};

// let head = {
//     val: 1
//     next: {
//         val: 0,
//         next: {
//             val: 1,
//             next: null,
//         }
//     }
// }

var getDecimalValue = function(head) {
  let str = '';

  while(head) {
    str += head.val;
    head = head.next;
  }

  return parseInt(str, 2);
};