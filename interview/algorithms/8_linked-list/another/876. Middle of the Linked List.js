// ? 876. Middle of the Linked List
// ? Link: https://leetcode.com/problems/middle-of-the-linked-list/description/

// ? Given the head of a singly linked list, return the middle node of the linked list.
// ? If there are two middle nodes, return the second middle node.

// ? Example 1:
// ? Input: head = [1,2,3,4,5] ===> Output: [3,4,5]
// ? Explanation: The middle node of the list is node 3.

// ? Example 2:
// ? Input: head = [1,2,3,4,5,6] ===> Output: [4,5,6]
// ? Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  // ? Поскольку fast перемещается в два раза быстрее, чем slow, когда fast'
  // ? достигнет конца списка, slow окажется в середине списка.
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow
};

// let head = {
//     val: 1
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: { 
//               val: 4, 
//               next: { 
//                  val: 5
//                  next: null
//                } 
//             },
//         }
//     }
// }