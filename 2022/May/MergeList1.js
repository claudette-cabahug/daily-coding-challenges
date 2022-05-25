/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list.
Either head pointer may be null, meaning that the corresponding list is empty.

Example
headA refers to 1 - 3 - 7 - null
headB refers to 1 - 2 - null
A & B both are references to the head of a list
The new list is 1 - 1 - 2 - 3 - 7 - null

Returns SinglyLinkedListNode pointer: a reference to the head of the merged list


*/

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

// Solution Using Recursion

class SinglyLinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.data < head2.data) {
    return { data: head1.data, next: mergeLists(head1.next, head2) };
  } else {
    return { data: head2.data, next: mergeLists(head1, head2.next) };
  }
}

// valueN[] = {5,10,15,40}
let five = new SinglyLinkedListNode(5);
let ten = new SinglyLinkedListNode(10);
let fifteen = new SinglyLinkedListNode(15);
let forty = new SinglyLinkedListNode(40);
five.next = ten;
ten.next = fifteen;
fifteen.next = forty;

// valueM[] = {2,3,20}
let two = new SinglyLinkedListNode(2);
let three = new SinglyLinkedListNode(3);
let twenty = new SinglyLinkedListNode(20);
two.next = three;
three.next = twenty;

// Output: 2 3 5 10 15 20 40
let result = mergeLists(five, two)
console.log(result)


/* 
Introduction to Linked List: https://www.youtube.com/watch?v=NobHlGUjV3g 
Data Structures: Arrays vs Linked Lists: https://www.youtube.com/watch?v=lC-yYCOnN8Q 
Linked List in C/C++ - Inserting a node at beginning: https://www.youtube.com/watch?v=cAZ8CyDY56s 
*/
