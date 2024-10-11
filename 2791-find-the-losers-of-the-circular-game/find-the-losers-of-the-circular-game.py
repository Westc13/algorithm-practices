class Solution:
    def circularGameLosers(self, n: int, k: int) -> List[int]:
        visited = set()
        current = 1  
        visited.add(current)
        turn = 1

        while True:
            steps = turn * k
        
            next_pos = ((current - 1 + steps) % n) + 1

            if next_pos in visited:
                break
            else:
                visited.add(next_pos)
                current = next_pos
                turn += 1

        losers = [friend for friend in range(1, n + 1) if friend not in visited]
        return sorted(losers)