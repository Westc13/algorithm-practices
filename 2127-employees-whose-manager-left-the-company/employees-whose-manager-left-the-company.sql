# Write your MySQL query statement below
SELECT employee_id
FROM Employees as e1
WHERE salary < 30000
AND manager_id NOT IN (SELECT employee_id FROM Employees)
ORDER BY employee_id;