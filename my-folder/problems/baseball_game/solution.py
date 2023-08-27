class Solution:
    def calPoints(self, operations: List[str]) -> int:
        results = []
        for operation in operations:
            if operation.isdigit() or (operation[0] == '-' and operation[1:].isdigit()):
                results.append(int(operation))
            elif operation == '+':
                results.append(results[-1] + results[-2])                
            elif operation == 'D':
                results.append(results[-1]*2)
            elif operation == 'C':
                results.pop()
        return sum(results)