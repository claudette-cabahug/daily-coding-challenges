// Solution By Iteration

function getNewNode(value) {
  return { data: value, next: null };
}

function mergeLists(head1, head2) {

  let firstPointer = head1;
  let secondPointer = head2;
  let newhead = null;
  let newTail = newhead;
  let newNode = null;

  while (firstPointer != null && secondPointer != null) {

      if (firstPointer.data == secondPointer.data) {
          newNode = getNewNode(firstPointer.data);
          firstPointer = firstPointer.next;
      }
      else if (firstPointer.data < secondPointer.data) {
          newNode = getNewNode(firstPointer.data);
          firstPointer = firstPointer.next;
      }
      else if (firstPointer.data > secondPointer.data) {
          newNode = getNewNode(secondPointer.data);
          secondPointer = secondPointer.next;
      }
      if (newhead == null) {
          newhead = newNode;
          newTail = newhead;
      } else {
          newTail.next = newNode;
          newTail = newNode;
      }
      
  }

  if (firstPointer == null) {
      newTail.next = secondPointer;
  } else if (secondPointer == null) {
      newTail.next = firstPointer
  }
  return newhead;

}

class SinglyLinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

let five = new SinglyLinkedListNode(5)
let ten = new SinglyLinkedListNode(10)
let fifteen = new SinglyLinkedListNode(15)
let forty = new SinglyLinkedListNode(40)
five.next = ten
ten.next = fifteen
fifteen.next = forty

let two = new SinglyLinkedListNode(2)
let three = new SinglyLinkedListNode(3)
let twenty = new SinglyLinkedListNode(20)
two.next = three
three.next = twenty

let result = mergeLists(five, two)
console.log(result) // 1, 2, 3, 3, 4