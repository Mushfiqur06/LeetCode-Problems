class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  let currentNode: ListNode | null = head;
  let count: number = 0;
  while (currentNode != null) {
    count++;
    currentNode = currentNode.next;
  }

  if (count === 1) return null;
  let middleNode: number = Math.floor(count / 2) - 1;
  let indexOfNode: number = 0;
  currentNode = head;
  while (currentNode) {
    if (indexOfNode === middleNode) {
      currentNode.next = currentNode.next.next;
      break;
    }
    currentNode = currentNode.next;
    indexOfNode++;
  }

  return head;
}
