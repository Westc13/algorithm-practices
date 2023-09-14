# Write your MySQL query statement below
 SELECT customer_id, COUNT(*) as count_no_trans
 FROM (
     SELECT V.customer_id
     FROM Visits V
     LEFT JOIN Transactions T ON V.visit_id = T.visit_id
     WHERE T.transaction_id IS NULL
 ) AS no_trans_visits
 GROUP BY customer_id
