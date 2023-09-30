# Write your MySQL query statement below
WITH StartTimes AS (
    SELECT machine_id, process_id, timestamp AS start_time
    FROM Activity
    WHERE activity_type = 'start'
),
EndTimes AS (
    SELECT machine_id, process_id, timestamp AS end_time
    FROM Activity
    WHERE activity_type = 'end'
),
ProcessTimes AS (
    SELECT
        s.machine_id,
        s.process_id,
        ROUND(e.end_time - s.start_time, 3) AS processing_time
    FROM StartTimes s
    JOIN EndTimes e
    ON s.machine_id = e.machine_id AND s.process_id = e.process_id
)
SELECT
    machine_id,
    ROUND(AVG(processing_time), 3) AS processing_time
FROM ProcessTimes
GROUP BY machine_id;
