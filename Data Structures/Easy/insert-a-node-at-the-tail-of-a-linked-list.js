function insertNodeAtTail(head, data) {
    let tmp = new SinglyLinkedListNode(); 
    tmp.data = data; 
    tmp.next = null;
    if(head === undefined || head === null){
        head = tmp;
        return head;
    }
    let current = head;
    while(current.next != null) {
        current = current.next;
    }
    current.next = tmp;
    return head;
}