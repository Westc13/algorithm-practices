class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        pop_changes = [0] * (2050 - 1950 + 1)

        for birth, death in logs:
            pop_changes[birth - 1950] += 1
            pop_changes[death - 1950] -= 1

        cumulative_pop = [0] * (2050 - 1950 + 1)
        cumulative_pop[0] = pop_changes[0]

        for i in range(1, len(pop_changes)):
            cumulative_pop[i] = cumulative_pop[i - 1] + pop_changes[i]

        max_pop = max(cumulative_pop)
        earliest_year = 1950 + cumulative_pop.index(max_pop)

        return earliest_year