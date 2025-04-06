var deleteMiddle = function (head) {
    if(head===null || head.next===null) return null;

    let slow = head;
    let fast = head;
    fast = fast.next.next;

    while(fast !== null && fast.next !==null){
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = slow.next.next;
    return head;
};
