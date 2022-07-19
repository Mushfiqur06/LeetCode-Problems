function middleOfTheLinkedList(head){
    let prevNode = null;
    let firstNode = head;
    let lastNode = head;

    while(lastNode !== null && lastNode.next !== null){
        prevNode = firstNode;
        firstNode = firstNode.next;
        lastNode = lastNode.next.next;
    }

    return lastNode;
}