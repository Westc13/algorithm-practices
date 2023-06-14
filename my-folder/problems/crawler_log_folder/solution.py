class Solution:
    def minOperations(self, logs: List[str]) -> int:
        stack = []

        for operation in logs:
            if operation == "../":
                if stack:
                    stack.pop()
            elif operation == "./":
                continue
            else:
                folder_name = operation[:-1]
                stack.append(folder_name)
        
        return len(stack)