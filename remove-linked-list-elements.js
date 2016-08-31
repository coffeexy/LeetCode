/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var prev = head
    var current = prev
    
    while (current) {
        if (current.val === val) {
            if (current === head) {
                head = head.next
            } else {
                prev.next = current.next
                current = current.next
                continue
            }
        }
        prev = current
        current = current.next
    }
    return head
};