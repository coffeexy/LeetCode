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
var detectCycle = function(head) {
    var map = new Map()
    var next = null
    map.set(head, 1)
    
    while(head && head.next) {
        next = head.next
        map.set(next, map.has(next) ? map.get(next) + 1 : 1)
        if(map.get(next) > 1) return next
        head = next
    }
    return null
}