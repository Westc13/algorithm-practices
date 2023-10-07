# Write your MySQL query statement below
WITH contest_user_counts AS (
  SELECT
  r.contest_id,
  COUNT(r.user_id) AS user_count
  FROM Register r
  GROUP BY r.contest_id
),
total_users AS (
  SELECT COUNT(DISTINCT user_id) AS total_users
  FROM Users
)
SELECT
cuc.contest_id,
ROUND((cuc.user_count * 100.0 / tu.total_users), 2) AS percentage
FROM contest_user_counts cuc
JOIN total_users tu ON 1=1
ORDER BY percentage DESC, contest_id ASC;