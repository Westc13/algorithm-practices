# Write your MySQL query statement below
SELECT employee_id 
FROM (
    SELECT n.employee_id 
    FROM Employees n
    LEFT JOIN Salaries s ON n.employee_id = s.employee_id
    WHERE s.employee_id IS NULL

    UNION

    SELECT s.employee_id 
    FROM Employees n
    RIGHT JOIN Salaries s ON n.employee_id = s.employee_id
    WHERE n.employee_id IS NULL
) AS missing_data
ORDER BY employee_id ASC;