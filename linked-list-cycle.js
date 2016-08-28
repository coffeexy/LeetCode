/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var prev = head
    while(prev && prev.next && prev.next.next) {
        prev = prev.next.next
        if(prev === head) return true
        head = head.next
    }
    return false
};