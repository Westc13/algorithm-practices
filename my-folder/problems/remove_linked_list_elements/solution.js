/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // Check if the head is null
    if(head === null){
        return null;
    }

    // Check if the head needs to be removed
    while(head.val === val){
        head = head.next;
        if (head === null){
            return null;
        }
    }
    
    // Remove nodes from the rest of the list
    let current = head;
    while (current.next !== null){
        if (current.next.val === val){
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;
};