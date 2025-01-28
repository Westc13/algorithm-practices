# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        current = dummy

        pointer = head.next
        current_sum = 0

        while pointer:
            if pointer.val == 0:
                if current_sum > 0:
                    current.next = ListNode(current_sum)
                    current = current.next
                    current_sum = 0
            else:
                current_sum += pointer.val
            
            pointer = pointer.next
        return dummy.next