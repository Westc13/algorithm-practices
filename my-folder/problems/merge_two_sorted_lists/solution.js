/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let mergedList = new ListNode();
    let p1 = list1, p2 = list2;
    let current = null;
    while(p1 && p2){
        let node;
        if (p1.val <= p2.val){
            node = new ListNode(p1.val)
            p1 = p1.next
        }
        else {
            node = new ListNode(p2.val)
            p2 = p2.next
        }
        if (current){
            current.next = node
        }
        else {
            mergedList.next = node
        }
        current = node
    }
    if(current){

    current.next = p1 || p2;}
    else{ 
    
    mergedList.next = p1 || p2}
    return mergedList.next
};