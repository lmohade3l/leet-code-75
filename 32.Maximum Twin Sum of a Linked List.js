var pairSum = function(head) {
    let slow = head;
    let fast = head;

    // find the middle node
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // slow is now the middle node

    // reverse the second half
    let prev= null;
    let current = slow;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // the second half is now reversed and prev is the "head"
    
    let maxSum = 0;
    let firstHalf =  head;
    let secondHalf = prev;

    while (firstHalf !== null && secondHalf !== null) {
        maxSum = Math.max( maxSum , firstHalf.val + secondHalf.val);
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return maxSum;

};