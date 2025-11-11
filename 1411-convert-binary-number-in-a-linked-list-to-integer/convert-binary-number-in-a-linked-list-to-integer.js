/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head){;
    let current = head;
    let base2 = '';
    while (current !== null) {
        base2 += current.val;
        current = current.next;
    }
    return parseInt(base2, 2);
};