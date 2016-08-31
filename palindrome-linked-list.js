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
var isPalindrome = function(head) {
    if (!head || !head.next) return true
    
    var stack = []
    var fast = slow = head
    
    while (fast.next && fast.next.next) {
        stack.unshift(slow.val)
        
        slow = slow.next
        fast = fast.next.next
    }
    
    if (fast.next) stack.unshift(slow.val);
    
    while (slow.next) {
        slow = slow.next
        let temp = stack.shift()
        if (temp !== slow.val) return false
    }
    if (stack.length === 0) return true
    return false
};