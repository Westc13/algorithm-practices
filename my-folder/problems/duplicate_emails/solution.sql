# Write your MySQL query statement below
# 1. count all emails
SELECT email FROM Person GROUP by email HAVING COUNT(email)>1
