/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head
    
    var temp = null
    var current = head.next
    var prev = head
    
    while (current) {
        if (prev === head) prev.next = null
        
        temp = current.next
        current.next = prev
        
        if (!temp) head = current
        
        prev = current
        current = temp
    }
    return head
};