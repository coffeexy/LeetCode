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
var insertNode = function(head, node) {
    if (!head) {
        head = new ListNode(node.val)
        return head
    }
    var current = head
    var prev = new ListNode(0)
    var newnode = new ListNode(node.val)
    while(current) {
        if(node.val <= current.val) {
            if(current === head) {
                prev.val = node.val
                prev.next = current
                head = prev
                return head
            }
            newnode.next = current
            prev.next = newnode
            return head
        }
        prev = current
        current = current.next
    }
    prev.next = newnode
    return head
}
var insertionSortList = function(head) {
    var result = null
    while(head) {
        result = insertNode(result, head)
        head = head.next
    }
    return result
};