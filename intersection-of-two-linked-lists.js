/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var lista = []
    var listb = []
    for (let prev = headA; prev; prev = prev.next) {
        lista.push(prev)
    }
    for (let prev = headB; prev; prev = prev.next) {
        listb.push(prev)
    }
    var lena = lista.length
    var lenb = listb.length
    if (lista[lena-1] !== listb[lenb-1]) return null
    for (let i = lena - 2, j = lenb - 2; i >= 0 && j >=0; i--, j--) {
        if (lista[i] !== listb[j]) return lista[i+1]
    }
    return lena > lenb ? listb[0] : lista[0]
};