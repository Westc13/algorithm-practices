class Solution:
    def average(self, salary: List[int]) -> float:
        salary.remove(min(salary))
        salary.remove(max(salary))
        # salary_min = min(salary)
        # salary_max = max(salary)
        # salary.remove(salary_min)
        # salary.remove(salary_max)
        return sum(salary) / len(salary)
        