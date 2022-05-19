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
// valueN[] = {5,10,15,40}
// valueM[] = {2,3,20}
// Output: 2 3 5 10 15 20 40

let list1 =  [1, 2, 3]
let list2 =  [3, 4]

function mergeLists(head1, head2) {
  if (!head1) return head2
  if (!head2) return head1
  
  if (head1.data < head2.data) {
      return {"data": head1.data, "next": mergeLists(head1.next, head2)}
  } else {
      return {"data": head2.data, "next": mergeLists(head1, head2.next)} 
  }
}

console.log(mergeLists(list1, list2)) // 1, 2, 3, 3, 4