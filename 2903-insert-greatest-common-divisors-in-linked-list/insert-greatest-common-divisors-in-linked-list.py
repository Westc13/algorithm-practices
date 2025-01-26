# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        while current and current.next:
            next_node = current.next
            gcd_value = gcd(current.val, next_node.val)

            gcd_node = ListNode(gcd_value)
            current.next = gcd_node
            gcd_node.next = next_node

            current = next_node
        return head