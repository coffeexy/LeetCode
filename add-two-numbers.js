/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var temp = 0
    var sum = 0
    var head = null
    var prev = null
    var node = null
    
    while (l1 || l2) {
        let a = 0, b = 0
        if (l1) a= l1.val
        if (l2) b = l2.val
        sum = a + b + temp
        
        if (sum >= 10) {
            temp = 1
            sum = sum - 10
        } else {
            temp = 0
        }
        
        if (head) {
            node = new ListNode(sum)
            prev.next = node
            prev = prev.next
        } else {
            head = new ListNode(sum)
            prev = head
        }
        
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    if (temp === 1) {
        node = new ListNode(1)
        prev.next = node
        prev = prev.next
    }
    
    return head
};
