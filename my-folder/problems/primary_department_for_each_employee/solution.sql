# Write your MySQL query statement below
WITH EmployeeCounts AS (
  SELECT employee_id, department_id, primary_flag,
  COUNT(*) OVER (PARTITION BY employee_id) AS department_count
  FROM Employee
)

SELECT employee_id, department_id
FROM EmployeeCounts
WHERE primary_flag = 'Y' OR department_count = 1