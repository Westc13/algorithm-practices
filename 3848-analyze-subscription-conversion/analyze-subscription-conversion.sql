
WITH TrialUsers AS (
    
    SELECT DISTINCT user_id
    FROM UserActivity
    WHERE activity_type = 'free_trial'
),
PaidUsers AS (
    SELECT DISTINCT user_id
    FROM UserActivity
    WHERE activity_type = 'paid'
),
ConvertedUsers AS (
    
    SELECT t.user_id
    FROM TrialUsers t
    JOIN PaidUsers p ON t.user_id = p.user_id
),
TrialAvg AS (
    
    SELECT user_id, 
           ROUND(AVG(activity_duration), 2) AS trial_avg_duration
    FROM UserActivity
    WHERE activity_type = 'free_trial'
    GROUP BY user_id
),
PaidAvg AS (
    
    SELECT user_id, 
           ROUND(AVG(activity_duration), 2) AS paid_avg_duration
    FROM UserActivity
    WHERE activity_type = 'paid'
    GROUP BY user_id
)

SELECT c.user_id, t.trial_avg_duration, p.paid_avg_duration
FROM ConvertedUsers c
JOIN TrialAvg t ON c.user_id = t.user_id
JOIN PaidAvg p ON c.user_id = p.user_id
ORDER BY c.user_id;