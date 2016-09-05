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
var swapPairs = function(head) {
    if (!head || !head.next) return head

    var pointer = head
    while(pointer && pointer.next) {
        let temp = pointer.next.val
        pointer.next.val = pointer.val
        pointer.val = temp
        
        pointer = pointer.next.next
    }
    return head
};