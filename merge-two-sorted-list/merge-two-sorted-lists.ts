class ListNodes {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoListss(
  list1: ListNodes | null,
  list2: ListNodes | null
): ListNodes | null {
  let newNode: ListNodes = new ListNodes();
  let currentNode = newNode;

  if (list1 === null && list2 === null) return newNode.next;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      newNode.next = list1;
      list1 = list1.next;
    } else {
      newNode.next = list2;
      list2 = list2.next;
    }
    newNode = newNode.next;
  }

  if (list1 !== null) {
    newNode.next = list1;
  }
  if (list2 !== null) {
    newNode.next = list2;
  }

  return currentNode.next;
}
