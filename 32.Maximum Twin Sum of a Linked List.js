var pairSum = function(head) {
    let prev = null;
    let current = head;
    let length = 0;

    while (current !== null) {
        length ++;
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    let maxSum = 0;
    let list =  head;

    while (length / 2 > 0) {
        maxSum = Math.max( maxSum , head + prev);
        list = list.next;
        prev = prev.next;
        length --;
    }

    return maxSum;


};