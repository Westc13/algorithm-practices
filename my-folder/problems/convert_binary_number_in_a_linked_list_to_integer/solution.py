# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        val_arr = []
        curr = head
        while curr is not None:
            val_arr.append(curr.val)
            curr = curr.next
        bin_num =  ''.join([str(x) for x in val_arr])
        deci_num = int(bin_num, 2)
        return deci_num


        