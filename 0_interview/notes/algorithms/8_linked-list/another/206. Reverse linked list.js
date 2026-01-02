// ? 206. Reverse Linked List
// ? Link: https://leetcode.com/problems/reverse-linked-list/description/

// ? Given the head of a singly linked list, reverse the list, and return 
// ? the reversed list.

// ? Input: head = [1,2,3,4,5] ===> Output: [5,4,3,2,1]
// ? Input: head = [1,2] ===> Output: [2,1]

var reverseList = function(head) {
  let current = head;
  let prev = null;

  while (current) {
    // ! Сохраняем ссылку на следующий узел
    let next = current.next
    // ! Меняем текущий узел
    current.next = prev
    // ! Перемещаем prev на текущий узел
    prev = current
    // ! Переходим к следующему узлу
    current = next
  }

  return prev
}; 

// ? Recursive method
var reverseList = function(head) {
  if (!head || !head.next) return head
  let newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
}