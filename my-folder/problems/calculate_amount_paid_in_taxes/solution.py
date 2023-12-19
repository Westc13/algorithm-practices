class Solution:
    def calculateTax(self, brackets: List[List[int]], income: int) -> float:
        tax = 0
        i = 0
        while i < len(brackets) and income > 0:
            upper_bound, tax_rate = brackets[i]
            if i > 0:
                taxable_income = min(upper_bound - brackets[i-1][0], income)
            else:
                taxable_income = min(upper_bound, income)
            tax += taxable_income * tax_rate / 100
            income -= taxable_income
            i += 1
        return tax