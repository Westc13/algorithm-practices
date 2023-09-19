# Write your MySQL query statement below
SELECT e.name, 
CASE
WHEN b.bonus IS NULL THEN NULL
ELSE b.bonus
END as bonus
FROM Employee AS e
LEFT JOIN Bonus AS b
ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL