/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 遍历计算长度
    var fast = head
    var len = 1
    while(fast && fast.next) {
        fast = fast.next.next
        len += 2
    }
    if (fast === null) len--
    
    var prev = head
    if (len === n) return head.next
    for (let i = 1; i < len-n; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next
    
    return head
};