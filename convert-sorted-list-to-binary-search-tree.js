/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var buildtree = function(start, end) {
    if (start === end) return null
    // 又要找链表的中间结点了,fast走到尾，slow即为中点
    var fast = start
    var slow = start
    
    while(fast !== end && fast.next !== end) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    var node = new TreeNode(slow.val)
    node.left = buildtree(start, slow)
    node.right = buildtree(slow.next, end)
    
    return node
}
var sortedListToBST = function(head) {
    if (!head) return head
    return buildtree(head, null)
    
};