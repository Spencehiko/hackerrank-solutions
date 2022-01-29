function insertNodeAtHead(head, data) {
    if(head === undefined || head === null){ 
        head = new SinglyLinkedListNode();
        head.data = data; 
        head.next = null;
        return head;
    }
    let tmp = new SinglyLinkedListNode();
    tmp.data = data;
    tmp.next = head;
    return tmp;
}