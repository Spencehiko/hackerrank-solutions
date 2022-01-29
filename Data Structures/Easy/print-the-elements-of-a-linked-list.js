function printLinkedList(head) {
    let currNode = head;
    while(currNode !== null){
        console.log(currNode.data);
        currNode = currNode.next;
    }
}