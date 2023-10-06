# Write your MySQL query statement below
WITH ExamCounts AS (
    SELECT
        s.student_id,
        sub.subject_name,
        COUNT(e.subject_name) AS attended_exams
    FROM Students s
    CROSS JOIN Subjects sub
    LEFT JOIN Examinations e ON s.student_id = e.student_id AND sub.subject_name = e.subject_name
    GROUP BY s.student_id, sub.subject_name
)

SELECT
    ec.student_id,
    s.student_name,
    ec.subject_name,
    COALESCE(ec.attended_exams, 0) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT JOIN ExamCounts ec ON s.student_id = ec.student_id AND sub.subject_name = ec.subject_name
ORDER BY ec.student_id, sub.subject_name;
