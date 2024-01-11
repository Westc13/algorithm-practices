class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        n = len(tickets)
        queue = [(i, tickets[i]) for i in range(n)]
        time_taken = 0

        while queue:
            i, remaining_tickets = queue.pop(0)

            tickets_to_buy = min(remaining_tickets, 1)

            remaining_tickets -= tickets_to_buy
            tickets[i] = remaining_tickets

            if remaining_tickets > 0:
                queue.append((i, remaining_tickets))
            
            time_taken += tickets_to_buy

            if i == k and remaining_tickets == 0:
                break
            
            queue = [(j, t) for j, t in queue]
        
        return time_taken